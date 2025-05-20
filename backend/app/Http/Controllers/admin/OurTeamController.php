<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\OurTeam;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class OurTeamController extends Controller
{
        public function store(Request $request){
        $validation = Validator::make($request->all(),[
            'name'=> 'required'
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=> false,
                "errors"=> $validation->errors()
            ]);
        }

        $member = new OurTeam();
        $member->name = $request->name;
        $member->designation = $request->designation;
        $member->link = $request->link;
        $member->status = $request->status;
        $member->save();

        if ($request->imageId > 0) {
            $findImage = TempImage::find($request->imageId);
            if ($findImage != null) {
                $extArr = explode('.', $findImage->name);
                $ext = last($extArr);
                $imageName = strtotime('now').$member->id.'.'.$ext;

                $sourc_path = public_path('uploads/temp/'.$findImage->name);
                $destination_path = public_path('uploads/our_team/'.$imageName);

                $manager = new ImageManager(Driver::class);
                $imageStore = $manager->read($sourc_path);
                $imageStore->coverDown(500,600);
                $imageStore->save($destination_path);

                $member->image = $imageName;
                $member->save();
            }
        }

        return response()->json([
            'status'=>true,
            'message'=>'This items store  success'
        ]);
    }
}
