<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ServicesController;
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

});
