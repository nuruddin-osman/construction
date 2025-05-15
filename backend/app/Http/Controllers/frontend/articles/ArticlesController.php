<?php

namespace App\Http\Controllers\frontend\articles;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index(){
        $articles = Article::where('status',1)->orderBy('created_at', 'DESC')->get();
        if ($articles == null) {
            return response()->json([
                'status'=>false,
                'errors'=>"items is not found",
            ]);
        }
        return response()->json([
            'status'=>true,
            'message'=>"success",
            'data'=> $articles
        ]);
    }

    public function latestItem(Request $request){
        $articles = Article::where('status',1)
        ->orderBy('created_at', 'DESC')
        ->take($request->get('limit'))
        ->get();

        if ($articles == null) {
            return response()->json([
                'status'=>false,
                'errors'=>"items is not found",
            ]);
        }
        return response()->json([
            'status'=>true,
            'message'=>"success",
            'data'=> $articles
        ]);
    }
}
