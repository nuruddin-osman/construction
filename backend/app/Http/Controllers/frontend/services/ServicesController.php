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
        return response()->json([
            'status'=> true,
            'data'=> $services  
        ]);
    }

    public function limitedServices(Request $request){
        $services = Services::where('status',1)
                    ->take($request->get('limit'))
                    ->orderBy('created_at','DESC')->get();
        
        return response()->json([
            'status'=> true,
            'data'=> $services
        ]);            
    }
}
