<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ArticleController extends Controller
{
    public function index(){
        $article = Article::orderBy('created_at', 'DESC')->get();

        if ($article == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'Article items is not found'
            ]);
        }
        return response()->json([
            'status'=>true,
            'data'=> $article,
            'message'=> "success"
        ]);
    }
    public function store(Request $request){

        $request->merge(['slug'=>Str::slug($request->slug)]);

        $validation = Validator::make($request->all(),[
            'title'=> "required",
            'slug'=> 'required|unique:articles,slug',
        ]);

        if ($validation->fails()) {
            return response()->json([
                "status"=> false,
                "errors"=> $validation->errors()
            ]);
        }
        $article = new Article();
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        if ($request->imageId > 0) {

            $tempImage = TempImage::find($request->imageId);

            if ($tempImage != null) {
                $extArr = explode('.', $tempImage->name);
                $ext = last($extArr);
                $imageName = strtotime('now').$article->id .'.'.$ext;

                $source_path = public_path('uploads/temp/'.$tempImage->name);
                $destination_path_large = public_path('uploads/articles/large/'.$imageName);
                $destination_path_small = public_path('uploads/articles/small/'.$imageName);

                $manager = new ImageManager(Driver::class);
                $image = $manager->read($source_path);

                $image->scaleDown(1200);
                $image->save($destination_path_large);

                $image->coverDown(450,300);
                $image->save($destination_path_small);

                $article->image = $imageName;
                $article->save();
            }

        }

        return response()->json([
            'status'=>true,
            'data'=>$article,
            'message'=> 'success'
        ]);
    }
    public function show($id){
        $article = Article::find($id);
        
        if ($article == null) {
            return response()->json([
                'status'=> false,
                'errors'=> 'Article items is not found'
            ]);
        }
        return response()->json([
            'status'=>true,
            'data'=> $article,
            'message'=> "success"
        ]);
    }
    public function update(Request $request, $id){

        $article = Article::find($id);
        if ($article == null) {
            return response()->json([
                'status'=> false,
                'errors'=> "Update item in not found"
            ]);
        }

        $request->merge(['slug'=>Str::slug($request->slug)]);

        $validation = Validator::make($request->all(),[
            'title'=> 'required',
            'slug'=> 'required|unique:articles,slug,'.$id.',id',
        ]);
        if ($validation->fails()) {
                return response()->json([
                'status'=> false,
                'errors'=> $validation->errors()
            ]);
        }

        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();
        

        if ($request->imageId > 0) {

            $oldImage = $article->image;

            $temp_image = TempImage::find($request->imageId);
            
            if ($temp_image != null) {
                $extArr = explode('.',$temp_image->name);
                $ext = last($extArr);
                $imageName = strtotime('now').$article->id.'.'.$ext;

                $source_path = public_path('uploads/temp/'.$temp_image->name);
                $destination_path_large = public_path('uploads/articles/large/'.$imageName);
                $destination_path_small = public_path('uploads/articles/small/'.$imageName);

                $manager = new ImageManager(Driver::class);
                $images = $manager->read($source_path);

                $images->scaleDown(1200);
                $images->save($destination_path_large);

                $images->coverDown(450,300);
                $images->save($destination_path_small);

                $article->image = $imageName;
                $article->save();

                if ($oldImage != '') {
                    File::delete(public_path('uploads/projects/large/'.$oldImage));
                    File::delete(public_path('uploads/projects/small/'.$oldImage));
                }
            }
        }
        return response()->json([
            'status'=>true,
            'data'=>$article,
            'message'=> 'success'
        ]);
    }

    public function destroy($id){
        $article = Article::find($id);

        $article->delete();

        if ($article == null) {
            return response()->json([
                'status'=> false,
                'errors'=> "this item in not deleted"
            ]);
        }

        File::delete(public_path('uploads/articles/large/'.$article->image));
        File::delete(public_path('uploads/articles/small/'.$article->image));

        return response()->json([
            'status'=> true,
            'message'=> "this item is deleted"
        ]);
    }
}
