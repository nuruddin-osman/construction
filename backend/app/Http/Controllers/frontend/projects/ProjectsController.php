<?php

namespace App\Http\Controllers\frontend\projects;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index(){
        $projects = Projects::where('status',1)->orderBy('created_at', 'DESC')->get();

        if ($projects == null) {
            return response()->json([
                'status'=>false,
                'errors'=> 'this project items is not found'
            ]);
        }
        return response()->json([
            'status'=>true,
            'data'=> $projects,
        ]);
    }

    public function latestProjects(Request $request){
        $latest_projects = Projects::where('status',1)
        ->orderBy("created_at", "DESC")
        ->take($request->get('limit'))
        ->get();

        if ($latest_projects == null) {
            return response()->json([
                'status'=>false,
                'errors'=> 'this project items is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            "data"=>$latest_projects
        ]);
    }

    public function latestOne($id){

        $project = Projects::find($id);

        if ($project == null) {
            return response()->json([
                'status'=>false,
                'errors'=> 'this project item is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            "data"=>$project
        ]);
    }
}
