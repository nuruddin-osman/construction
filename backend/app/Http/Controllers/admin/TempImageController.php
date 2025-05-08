<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class TempImageController extends Controller
{
    public function store(Request $request){
        $validation = Validator::make($request->all(),[
            'image'=>'required|mimes:jpg,jpeg,png,gif'
        ]);
        if ($validation->fails()) {
           return response()->json([
            'status'=>false,
            'errors'=>$validation->errors('image')
           ]);
        }
        //ইমেজ সেভ ও ডেটাবেসে ইনসার্ট



        //image unique name created
        $image = $request->image;
        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now').'.'.$ext;
        //TempImage মডেলে সেই ফাইলের নাম সেভ করা হচ্ছে।
        $model = new TempImage();
        $model->name = $imageName;
        $model->save();
        //ইমেজটি public/uploads/temp ফোল্ডারে মুভ করে রাখা হচ্ছে।
        $image_path = public_path('uploads/temp');
        $image->move($image_path,$imageName);


        //Thumbnail তৈরির কাজ
        $source_path = public_path('uploads/temp/'.$imageName);
        $destination_path = public_path('uploads/temp/thumb/'.$imageName);

        $manager = new ImageManager(Driver::class);
        $image = $manager->read($source_path);
        $image->coverDown(300,300);
        $image->save($destination_path);


        return response()->json([
            'status'=>true,
            'data'=>$model,
            'message'=>"success"
        ]);
    }
}
