<?php

namespace App\Http\Controllers\frontend\testimonials;

use App\Http\Controllers\Controller;
use App\Models\Testimonials;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    public function index(){
        $testimonials = Testimonials::orderBy('created_at','DESC')->where('status',1)->get();
        if ($testimonials == null) {
            return response()->json([
                'status'=> false,
                'message'=> 'items not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $testimonials,
            'message'=> 'success'
        ]);
    }
    public function latestItem(Request $request){
        $testimonials = Testimonials::orderBy('created_at', 'DESC')
        ->where('status', 1)
        ->take($request->get('limit'))
        ->get();

        if ($testimonials == null) {
            return response()->json([
                'status'=> false,
                'message'=> 'items not found'
            ]);
        }
        return response()->json([
            'status'=> true,
            'data'=> $testimonials,
            'message'=> 'success'
        ]);
    }
}
