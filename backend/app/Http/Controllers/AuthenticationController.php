<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request){
        $validation = Validator::make($request->all(),[
            'email'=> "required|email",
            'password'=> "required",
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status'=>false,
                'errors'=> $validation->errors()
            ]);
        } else {
            $credentials = [
                "email"=> $request->email,
                "password"=> $request->password,
            ];
            if (Auth::attempt($credentials)) {
                $user = User::find(Auth::user()->id);
                $token = $user->createToken('token')->plainTextToken;
               return response()->json([
                "status"=> true,
                "message"=> "success",
                "token"=> $token,
                "id"=> Auth::user()->id,
               ]);
            } else {
                return response()->json([
                    'status'=>false,
                    'message'=>"user not found"
                ]);
            }
        }
    }
    public function logout(Request $request){
        $user = $request->user();
       $user->tokens()->delete();
       return response()->json([
        'status'=>true,
        'message'=>"success"
        ]);
    }
}