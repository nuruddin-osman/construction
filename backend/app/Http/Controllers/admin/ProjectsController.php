<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProjectsController extends Controller
{
    public function index(){

    }

    public function store(Request $request){

        $request->merge(['slug'=> Str::slug($request->slug)]);

        $validation = Validator::make($request->all(),[
            'title'=>'required',
            'slug'=>'required|unique:projects,slug',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=>false,
                'errors'=>$validation->errors()
            ]);
        }

        $project = new Projects();
        $project->title = $request->title;
        $project->slug = Str::slug($request->slug);
        $project->short_desc = $request->short_desc;
        $project->description = $request->description;
        $project->construction_type = $request->construction_type;
        $project->location = $request->location;
        $project->sector = $request->sector;
        $project->status = $request->status;
        $project->save();
    
        return response()->json([
            'status'=> true,
            'data'=> $project,
            'message'=>"New projects overview added successfully"
        ]);
    }
}
