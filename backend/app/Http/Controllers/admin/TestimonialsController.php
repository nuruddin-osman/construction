<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonials;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class TestimonialsController extends Controller
{
    public function index(){
        $testimonials = Testimonials::orderBy('created_at', 'DESC')->get();
        if ($testimonials == null) {
            return response()->json([
                'status'=>false,
                'errors'=>"items is not found"
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $testimonials,
            "message"=>'successfully fetched this items'
        ]);
    }
    public function store(Request $request){
        $validation = Validator::make($request->all(),[
            'title'=> "required",
            'name'=> "required",
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=> false,
                'errors'=> $validation->errors()
            ]);
        }

        $testimonials = new Testimonials();
        $testimonials->rating = $request->rating;
        $testimonials->title = $request->title;
        $testimonials->description = $request->description;
        $testimonials->name = $request->name;
        $testimonials->designation = $request->designation;
        $testimonials->status = $request->status;
        $testimonials->save();

        if ($request->imageId > 0) {
            $temp_image = TempImage::find($request->imageId);
            if ($temp_image != null) {
                $extArr = explode('.', $temp_image->name);
                $ext = last($extArr);
                $imageName  = strtotime('now').$testimonials->id.".".$ext;

                //temp folder theke niye ese testimonials folder a store kora START
                $sourcePath = public_path('uploads/temp/'.$temp_image->name);
                $destinationPath = public_path('uploads/testimonials/'.$imageName);

                $manager = new ImageManager(Driver::class);
                $imageStore = $manager->read($sourcePath);
                $imageStore->coverDown(200,200);
                $imageStore->save($destinationPath);
                //temp folder theke niye ese testimonials folder a store kora END

                $testimonials->image = $imageName;
                $testimonials->save();
            }
        }

        return response()->json([
            "status"=> true,
            "message"=> "this item in added successfully"
        ]);
    }
    public function update(Request $request, $id){

        $testimonials = Testimonials::find($id);
        if ($testimonials == null) {
            return response()->json([
                'status'=>false,
                'message'=>'testimonials in not found'
            ]);
        }

        $validation  = Validator::make($request->all(),[
            'title'=>"required",
            'name'=> 'required',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=>false,
                'errors'=>$validation->errors()
            ]);
        }

        $testimonials->rating = $request->rating;
        $testimonials->title = $request->title;
        $testimonials->description = $request->description;
        $testimonials->name = $request->name;
        $testimonials->designation = $request->designation;
        $testimonials->status = $request->status;
        $testimonials->save();

        if ($request->imageId > 0) {
            $oldImage = $testimonials->image;
            $temp_image = TempImage::find($request->imageId);
            if ($temp_image != null) {

                $extArr = explode('.', $temp_image->name);
                $ext = last($extArr);
                $imageName  = strtotime('now').$testimonials->id.".".$ext;

                //temp folder theke niye ese testimonials folder a store kora START
                $sourcePath = public_path('uploads/temp/'.$temp_image->name);
                $destinationPath = public_path('uploads/testimonials/'.$imageName);

                $manager = new ImageManager(Driver::class);
                $imageStore = $manager->read($sourcePath);
                $imageStore->coverDown(200,200);
                $imageStore->save($destinationPath);
                //temp folder theke niye ese testimonials folder a store kora END

                $testimonials->image = $imageName;
                $testimonials->save();

                if ($oldImage != null) {
                    File::delete(public_path('uploads/testimonials/'.$oldImage));
                }
            }

        }

        return response()->json([
            'status'=>true,
            'message'=> 'This items updated successfully',
        ]);
    }
    public function show($id){
        $testimonials = Testimonials::find($id);
        if ($testimonials == null) {
            return response()->json([
                'status'=>false,
                'errors'=>"item is not found"
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $testimonials,
            "message"=>'successfully fetched this items'
        ]);
    }
    public function destroy($id){
        $testimonials = Testimonials::find($id);
        if ($testimonials == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'this testimonials items is not found'
            ]);
        }
        $testimonials->delete();

        File::delete(public_path('uploads/testimonials/'.$testimonials->image));

        return response()->json([
            'status'=> true,
            'message'=> 'This item delete successfully'
        ]);
    }
}
