<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\OurTeamController;
use App\Http\Controllers\admin\ProjectsController;
use App\Http\Controllers\admin\ServicesController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\TestimonialsController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\frontend\articles\ArticlesController;
use App\Http\Controllers\frontend\ourteam\OurteamController as OurteamOurteamController;
use App\Http\Controllers\frontend\projects\ProjectsController as ProjectsProjectsController;
use App\Http\Controllers\frontend\services\ServicesController as ServicesServicesController;
use App\Http\Controllers\frontend\testimonials\TestimonialsController as TestimonialsTestimonialsController;
use Illuminate\Support\Facades\Route;




Route::post('/authenticate',[AuthenticationController::class, 'authenticate']);
Route::get('/get-services',[ServicesServicesController::class, 'index']);
Route::get('/limit-services',[ServicesServicesController::class, 'limitedServices']);

Route::get('get-projects',[ProjectsProjectsController::class, 'index']);
Route::get("get-latest-projects", [ProjectsProjectsController::class, 'latestProjects']);

Route::get("get-articles", [ArticlesController::class, 'index']);
Route::get("latest-articles", [ArticlesController::class, 'latestItem']);

Route::get("get-testimonials", [TestimonialsTestimonialsController::class, 'index']);
Route::get("latest-testimonials", [TestimonialsTestimonialsController::class, 'latestItem']);

Route::get("get-members", [OurteamOurteamController::class, 'index']);
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
 

Route::middleware('auth:sanctum')->group(function () {
    // Protected route
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::post('/logout', [AuthenticationController::class, 'logout']);
    
    //image uploads route
    Route::post('/temp-image', [TempImageController::class, 'store']);


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
    Route::get('/article/{id}', [ArticleController::class, 'show']);
    Route::put('/article/{id}', [ArticleController::class, 'update']);
    Route::delete('/article/{id}', [ArticleController::class, 'destroy']);

    //testimonials routes
    Route::post('/testimonials',[TestimonialsController::class, 'store']);
    Route::get('/testimonials',[TestimonialsController::class, 'index']);
    Route::put('/testimonials/{id}',[TestimonialsController::class, 'update']);
    Route::get('/testimonials/{id}',[TestimonialsController::class, 'show']);
    Route::delete('/testimonials/{id}',[TestimonialsController::class, 'destroy']);

    //Our team routes
    Route::post('/members', [OurTeamController::class, 'store']);
    Route::get('/members', [OurTeamController::class, 'index']);
    Route::put('/members/{id}', [OurTeamController::class, 'update']);
    Route::get('/members/{id}', [OurTeamController::class, 'show']);
    Route::delete('/members/{id}', [OurTeamController::class, 'destroy']);
});
