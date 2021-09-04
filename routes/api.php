<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('admin')->group(function(){
    Route::resource('/users', App\Http\Controllers\Admin\UserController::class);    
    Route::resource('/companies', App\Http\Controllers\Admin\CompanyController::class); 
    Route::resource('/roles', App\Http\Controllers\Admin\RoleController::class); 
});

Route::prefix('setup')->group(function(){
    Route::resource('currencies', App\Http\Controllers\Setup\CurrencyController::class);
    Route::resource('taxcodes', App\Http\Controllers\Setup\TaxCodeController::class);
});
