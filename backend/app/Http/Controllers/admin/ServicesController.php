<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Services::orderBy('created_at','DESC')->get();
        return response()->json([
            'status'=>true,
            'data'=>$services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'title'=>'required',
            'slug'=>'required|unique:services,slug',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=>false,
                'errors'=>$validation->errors()
            ]);
        }
        $model = new Services();
        $model->title = $request->title;
        $model->slug = Str::slug($request->slug);
        $model->short_desc = $request->short_desc;
        $model->description = $request->description;
        $model->status = $request->status;
        $model->save();

        return response()->json([
            'status'=> true,
            'message'=> 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $services = Services::find($id);
        if ($services == null) {
            return response()->json([
                'status'=>false,
                'message'=>'services in not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $services,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(services $services)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $services = Services::find($id);

        if ($services == null) {
            return response()->json([
                'status'=>false,
                'message'=>'services in not found'
            ]);
        }

        $validation = Validator::make($request->all(),[
            'title'=>'required',
            'slug'=>'required|unique:services,slug,'.$id.',id'
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=>false,
                'errors'=>$validation->errors()
            ]);
        }

        $services->title = $request->title;
        $services->slug = Str::slug($request->slug);
        $services->short_desc = $request->short_desc;
        $services->description = $request->description;
        $services->status = $request->status;
        $services->save();

        return response()->json([
            'status'=> true,
            'data'=> $services
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $services = Services::find($id);
        if ($services == null) {
            return response()->json([
                'status'=>false,
                'message'=>'services in not found'
            ]);
        }
        $services->delete();
        return response()->json([
            'status'=> true,
            'data'=> $services,
            'message'=> 'services update success'
        ]);
    }
}
