<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index(Request $request){
        $validation = Validator::make($request->all(),[
            "name"=> "required",
            "email"=> "required",
        ]);
        if ($validation->fails()) {
           return response()->json([
                "status"=> false,
                "errors"=> $validation->errors()
           ]);
        }

        $mailData = [
            "name"=> $request->name,
            "email"=> $request->email,
            "phone"=> $request->phone,
            "subject"=> $request->subject,
            "message"=> $request->message,
        ];

        Mail::to("admin@example.com")->send(new ContactEmail($mailData));

        return response()->json([
            "status"=> true,
            "errors"=> "email send success"
        ]);
    }
}
