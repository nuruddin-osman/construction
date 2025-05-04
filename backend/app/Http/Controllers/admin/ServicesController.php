<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\services;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

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

        //temp image save
        if ($request->imageId > 0) {
            $temp_img = TempImage::find($request->imageId);
            if ($temp_img != null) {
                $extArray = explode('.',$temp_img->name);
                $ext = last($extArray);
                $fileName = strtotime('now').$model->id.'.'.$ext;

                //create large thumbnail
                $sourcePath = public_path('uploads/temp/'.$temp_img->name);

                $destinationPath = public_path('uploads/services/large/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
            
                //create small thumbnail
                $destinationPath = public_path('uploads/services/small/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500,600);
                $image->save($destinationPath);

                $model->image = $fileName;
                $model->save();
            }
        }

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

        //temp image save
        if ($request->imageId > 0) {
            $oldImage = $services->image;
            $temp_img = TempImage::find($request->imageId);
            if ($temp_img != null) {
                $extArray = explode('.',$temp_img->name);
                $ext = last($extArray);
                $fileName = strtotime('now').$services->id.'.'.$ext;

                //create large thumbnail
                $sourcePath = public_path('uploads/temp/'.$temp_img->name);

                $destinationPath = public_path('uploads/services/large/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);
            
                //create small thumbnail
                $destinationPath = public_path('uploads/services/small/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500,600);
                $image->save($destinationPath);

                $services->image = $fileName;
                $services->save();


                if ($oldImage != '') {
                    File::delete(public_path('uploads/services/large/'.$oldImage));
                    File::delete(public_path('uploads/services/small/'.$oldImage));
                }
            }
        } 


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
            'message'=> 'services delete success'
        ]);
    }
}
