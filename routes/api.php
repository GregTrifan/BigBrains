<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    "prefix"=>"/posts",
    "as"=>"posts"
], function () {
    Route::get('/',[PostsController::class, 'index'])->name("show");
    Route::post('/add',[ProductController::class,'create'])->name("add");
    Route::get('/show/{id}',[PostsController::class, 'show'])->name("show")->where("id","\d+");
});
