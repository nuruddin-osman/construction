<?php

namespace App\Http\Controllers\frontend\services;

use App\Http\Controllers\Controller;
use App\Models\services;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    //return all services
    public function index(){
        $services = Services::where('status',1)->orderBy('created_at','DESC')->get();
        if ($services == null) {
            return response()->json([
                'status'=>false,
                'errors'=>'this item is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $services  
        ]);
    }
    //return limited services
    public function limitedServices(Request $request){
        $services = Services::where('status',1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at','DESC')
                    ->get();
        if ($services == null) {
            return response()->json([
                'status'=>false,
                'errors'=>'this item is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $services
        ]);            
    }
    //return indentify  services
    public function latestOne($id){
        $services = Services::find($id);

        if ($services == null) {
            return response()->json([
                'status'=>false,
                'errors'=>'this item is not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $services
        ]);  
    }
}
