<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('users', UserController::class);
// Route::get('/', 'PostController@get');
// Route::put('/{id}', 'PostController@put');
// Route::post('/', 'PostController@post');