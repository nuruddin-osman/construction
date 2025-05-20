<?php

namespace App\Http\Controllers;

use App\Models\OurTeam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

        return response()->json([
            'status'=>true,
            'message'=>'This items store  success'
        ]);
    }
}
