<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group([
    "as"=>"spa"
], function () {
    //TODO: Reimplement using a controller
    Route::get('/', function () {
    return view('spa');
    });
    Route::get('/about', function() {
        return view('spa');
    });
});