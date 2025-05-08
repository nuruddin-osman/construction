<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ProjectsController extends Controller
{
    public function index(){
        $project = Projects::orderBy('created_at','DESC')->get();

        if ($project == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'this project items is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $project
        ]);
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


        if ($request->imageId > 0) {
            $temp_image = TempImage::find($request->imageId);
            if ($temp_image != null) {
                 //image name ke vengge extension ke niye aschi
               $extArry = explode('.',$temp_image->name);
               $ext = last($extArry);
               $imagName = strtotime('now').$project->id.'.'.$ext;

                //kon jayga theke niye asbo (sourcePath) r kothay use korbo (destinationPath)
                $sourcePath = public_path('uploads/temp/'.$temp_image->name);
                $destinationPathLarge = public_path('uploads/projects/large/'.$imagName);
                $destinationPathSmall = public_path('uploads/projects/small/'.$imagName);

                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);

                $image->scaleDown(1200);
                $image->save($destinationPathLarge);

                $image->coverDown(500,600);
                $image->save($destinationPathSmall);

                $project->image = $imagName;
                $project->save();
            }
        }
    
        return response()->json([
            'status'=> true,
            'data'=> $project,
            'message'=>"New projects overview added successfully"
        ]);
    }

    public function update(Request $request, $id){

        $project = Projects::find($id);

        $request->merge(['slug'=>Str::slug($request->slug)]);

        if ($project == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'Preject items is not found'
            ]);
        }
        
        $validation = Validator::make($request->all(),[
            'title'=> 'required',
            'slug'=>'required|unique:projects,slug,'.$id.',id'
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=> false,
                'errors'=> $validation->errors()
            ]);
        }

        $project->title = $request->title;
        $project->slug = Str::slug($request->slug);
        $project->short_desc = $request->short_desc;
        $project->description = $request->description;
        $project->construction_type = $request->construction_type;
        $project->location = $request->location;
        $project->sector = $request->sector;
        $project->status = $request->status;
        $project->save();

        if ($request->imageId > 0) {

            $old_image = $project->image;
            //$request er moddhe jodi image thake, tahole take find kore $temp_iamge a niye aschi
            $temp_image = TempImage::find($request->imageId);
            if ($temp_image != null) {
                //image name ke vengge extension ke niye aschi
                $extArry = explode('.',$temp_image->name);
                $ext = last($extArry);
                $imagName = strtotime('now').$project->id.'.'.$ext;

                //kon jayga theke niye asbo (sourcePath) r kothay use korbo (destinationPath)
                $sourcePath = public_path('uploads/temp/'.$temp_image->name);
                $destinationPath = public_path('uploads/projects/large/'.$imagName);

                //image procesing
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                //image processing large folder
                $image->scaleDown(1200);
                $image->save($destinationPath);
                //image pricessing small folder
                $destinationPath = public_path('uploads/projects/small/'.$imagName);
                $image->coverDown(500,600);
                $image->save($destinationPath);

                //image name updated and save
                $project->image = $imagName;
                $project->save();

                if ($old_image != '') {
                    File::delete(public_path('uploads/projects/large/'.$old_image));
                    File::delete(public_path('uploads/projects/small/'.$old_image));
                }

            }
        }

        return response()->json([
            'status'=>true,
            'data'=> $project,
            'message'=> "projects items updated successful"
        ]);
    }

    public function show($id){
        $project = Projects::find($id);
        if ($project == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'project id is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $project,
            'message'=> 'project item id found success'
        ]);
    }
    public function destroy($id){
        $project = Projects::find($id);
        $project->delete();
        
        if ($project == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'this project items is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'message'=> 'This item delete successfully'
        ]);

    }
}
