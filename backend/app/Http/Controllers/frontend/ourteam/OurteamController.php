<?php

namespace App\Http\Controllers\frontend\ourteam;

use App\Http\Controllers\Controller;
use App\Models\OurTeam;
use Illuminate\Http\Request;

class OurteamController extends Controller
{
    public function index(){
        $members = OurTeam::where('status',1)->orderBy('created_at','DESC')->get();
        if ($members == null) {
            return response()->json([
                "status"=>false,
                'errors'=> 'our team members is not found'
            ]);
        }
        return response()->json([
            "status"=>true,
            'message'=> 'success',
            'data'=>$members
        ]);
    }

    public function latest(Request $request){
        $members = OurTeam::where('status',1)
        ->orderBy('created_at','DESC')
        ->take($request->get('limit'))
        ->get();

        if ($members == null) {
            return response()->json([
                "status"=>false,
                'errors'=> 'our team members is not found'
            ]);
        }
        return response()->json([
            "status"=>true,
            'message'=> 'success',
            'data'=>$members
        ]);
    }
}
