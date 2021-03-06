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
    Route::resource('/permissions', App\Http\Controllers\Admin\PermissionController::class);
});

Route::prefix('setup')->group(function(){
    Route::get('currencies/search', [App\Http\Controllers\Setup\CurrencyController::class, 'search']);
    Route::resource('currencies', App\Http\Controllers\Setup\CurrencyController::class);

    Route::resource('currency-rates', App\Http\Controllers\Setup\CurrencyRateController::class);

    Route::get('taxcodes/search-account', [App\Http\Controllers\Setup\TaxCodeController::class, 'search_account']);
    Route::get('taxcodes/search', [App\Http\Controllers\Setup\TaxCodeController::class, 'search']);
    Route::resource('taxcodes', App\Http\Controllers\Setup\TaxCodeController::class);

    Route::get('accounts/search', [App\Http\Controllers\Setup\AccountController::class, 'search']);
    Route::get('accounts/types', [App\Http\Controllers\Setup\AccountController::class, 'account_types']);
    Route::get('accounts/parents', [App\Http\Controllers\Setup\AccountController::class, 'account_parents']);
    Route::resource('accounts', App\Http\Controllers\Setup\AccountController::class);

    Route::get('banks/search', [App\Http\Controllers\Setup\BankController::class, 'search']);
    Route::resource('banks', App\Http\Controllers\Setup\BankController::class);

    Route::get('bank-accounts/search-account', [App\Http\Controllers\Setup\BankAccountController::class, 'search_account']);
    Route::resource('bank-accounts', App\Http\Controllers\Setup\BankAccountController::class);

    Route::get('units/search', [App\Http\Controllers\Setup\UnitController::class, 'search']);
    Route::get('units/per_units', [App\Http\Controllers\Setup\UnitController::class, 'per_unit']);
    Route::resource('units', App\Http\Controllers\Setup\UnitController::class);

    Route::get('product-categories/search', [App\Http\Controllers\Setup\ProductCategoryController::class, 'search']);
    Route::get('product-categories/parents', [App\Http\Controllers\Setup\ProductCategoryController::class, 'category_parents']);
    Route::resource('product-categories', App\Http\Controllers\Setup\ProductCategoryController::class);

    Route::prefix('products/')->group(function(){
        Route::get('search-tags', [App\Http\Controllers\Setup\ProductController::class, 'search_tags']);
        Route::get('search-account', [App\Http\Controllers\Setup\ProductController::class, 'search_account']);
        Route::get('variants/values', [App\Http\Controllers\Setup\ProductController::class, 'search_variant_values']);
        Route::get('variants', [App\Http\Controllers\Setup\ProductController::class, 'search_variants']);
        Route::post('media/{id?}', [App\Http\Controllers\Setup\ProductController::class, 'media_upload']);
    });

    Route::resource('products', App\Http\Controllers\Setup\ProductController::class);

});

Route::get('media/{id}/{type?}', [App\Http\Controllers\MediaController::class, 'show'])->name('media.show');

Route::resource('media', App\Http\Controllers\MediaController::class);
