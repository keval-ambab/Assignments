<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('show',[dbController::class,'getUser']);
Route::get('showme',[MemberController::class,'show']);

Route::view('add','addmember');
Route::post('add',[MemberController::class,'addData']);

Route::get('delete/{id}',[MemberController::class,'delete']);

Route::get('update/{id}',[MemberController::class,'showdata']);
Route::post('update',[MemberController::class,'update']);

