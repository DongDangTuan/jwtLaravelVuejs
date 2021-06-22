<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

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
Route::prefix('auth')->group(function () {
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);
    Route::post('logout',[AuthController::class,'logout']);
});
Route::prefix('product')->group(function () {
    Route::get('index',[ProductController::class,'index']);
    Route::post('add',[ProductController::class,'store']);
    Route::put('update/{id}',[ProductController::class,'update']);
    Route::delete('delete/{id}',[ProductController::class,'destroy']);
});
