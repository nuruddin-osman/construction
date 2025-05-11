<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectsController;
use App\Http\Controllers\admin\ServicesController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\frontend\projects\ProjectsController as ProjectsProjectsController;
use App\Http\Controllers\frontend\services\ServicesController as ServicesServicesController;
use Illuminate\Support\Facades\Route;




Route::post('/authenticate',[AuthenticationController::class, 'authenticate']);
Route::get('/get-services',[ServicesServicesController::class, 'index']);
Route::get('/limit-services',[ServicesServicesController::class, 'limitedServices']);
Route::get('get-projects',[ProjectsProjectsController::class, 'index']);
Route::get("get-latest-projects", [ProjectsProjectsController::class, 'latestProjects']);
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

    //Projects Route
    Route::get('/projects', [ProjectsController::class, 'index']);
    Route::post('/projects', [ProjectsController::class, 'store']);
    Route::put('/projects/{id}', [ProjectsController::class, 'update']);
    Route::get('/projects/{id}', [ProjectsController::class, 'show']);
    Route::delete('/projects/{id}', [ProjectsController::class, 'destroy']);

    //Article Routes
    Route::get('/article', [ArticleController::class, 'index']);
    Route::post('/article', [ArticleController::class, 'store']);


    //image uploads route
    Route::post('/temp-image', [TempImageController::class, 'store']);

});
