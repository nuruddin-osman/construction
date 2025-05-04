<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServicesController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;
Route::post('/authenticate',[AuthenticationController::class, 'authenticate']);

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
 

Route::middleware('auth:sanctum')->group(function () {
    // Protected route
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::post('/logout', [AuthenticationController::class, 'logout']);

    // Servicces route
    Route::post('/services', [ServicesController::class, 'store']);
    Route::get('/services', [ServicesController::class, 'index']);
    Route::put('/services/{id}', [ServicesController::class, 'update']);
    Route::get('/services/{id}', [ServicesController::class, 'show']);
    Route::delete('/services/{id}', [ServicesController::class, 'destroy']);

    //image uploads route
    Route::post('/temp-image', [TempImageController::class, 'store']);

});
