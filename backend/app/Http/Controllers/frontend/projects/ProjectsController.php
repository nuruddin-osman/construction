<?php

namespace App\Http\Controllers\frontend\projects;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index(){
        $projects = Projects::where('status',1)->orderBy('created_at', 'DESC')->get();
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

        return response()->json([
            'status'=> true,
            "data"=>$latest_projects
        ]);
    }
}
