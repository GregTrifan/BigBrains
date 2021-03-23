<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
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
    "prefix" => "/posts",
    "as" => "posts"
], function () {
    Route::get('/', [PostController::class, 'index'])->name("show");
    Route::post('/add', [PostController::class, 'create'])->name("add");
    Route::get('/show/{id}', [PostController::class, 'show'])->name("show")->where("id", "\d+");
});
