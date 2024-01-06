<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(["prefix" => "v1"], function(){

    Route::group(["middleware" => "auth:sanctum"], function () {

        Route::get('/user', [App\Http\Controllers\Admin\ProfileController::class, 'profile']);
            
        Route::prefix('admin')->group(function(){
            Route::apiResource('/users', App\Http\Controllers\Admin\UserController::class);
            
            Route::get('/companies/types', [App\Http\Controllers\Admin\CompanyController::class, 'getTypes']);
            Route::apiResource('/companies', App\Http\Controllers\Admin\CompanyController::class);
            
            Route::apiResource('/roles', App\Http\Controllers\Admin\RoleController::class);
            Route::apiResource('/permissions', App\Http\Controllers\Admin\PermissionController::class);
            Route::apiResource('/statuses', App\Http\Controllers\Admin\StatusController::class);
        });

        Route::prefix('setup')->group(function(){

            Route::apiResource('accounts', App\Http\Controllers\Setup\AccountController::class);
            
            /*
            Route::get('currencies/search', [App\Http\Controllers\Setup\CurrencyController::class, 'search']);
            Route::apiResource('currencies', App\Http\Controllers\Setup\CurrencyController::class);

            Route::apiResource('currency-rates', App\Http\Controllers\Setup\CurrencyRateController::class);

            Route::get('taxcodes/search-account', [App\Http\Controllers\Setup\TaxCodeController::class, 'search_account']);
            Route::get('taxcodes/search', [App\Http\Controllers\Setup\TaxCodeController::class, 'search']);
            Route::apiResource('taxcodes', App\Http\Controllers\Setup\TaxCodeController::class);

            Route::get('accounts/search', [App\Http\Controllers\Setup\AccountController::class, 'search']);
            Route::get('accounts/types', [App\Http\Controllers\Setup\AccountController::class, 'account_types']);
            Route::get('accounts/parents', [App\Http\Controllers\Setup\AccountController::class, 'account_parents']);
            

            Route::get('banks/search', [App\Http\Controllers\Setup\BankController::class, 'search']);
            Route::apiResource('banks', App\Http\Controllers\Setup\BankController::class);

            Route::get('bank-accounts/search-account', [App\Http\Controllers\Setup\BankAccountController::class, 'search_account']);
            Route::apiResource('bank-accounts', App\Http\Controllers\Setup\BankAccountController::class);

            Route::get('units/search', [App\Http\Controllers\Setup\UnitController::class, 'search']);
            Route::get('units/per_units', [App\Http\Controllers\Setup\UnitController::class, 'per_unit']);
            Route::apiResource('units', App\Http\Controllers\Setup\UnitController::class);

            Route::get('product-categories/search', [App\Http\Controllers\Setup\ProductCategoryController::class, 'search']);
            Route::get('product-categories/parents', [App\Http\Controllers\Setup\ProductCategoryController::class, 'category_parents']);
            Route::apiResource('product-categories', App\Http\Controllers\Setup\ProductCategoryController::class);

            Route::prefix('products/')->group(function(){
                Route::get('search-tags', [App\Http\Controllers\Setup\ProductController::class, 'search_tags']);
                Route::get('search-account', [App\Http\Controllers\Setup\ProductController::class, 'search_account']);
                Route::get('variants/values', [App\Http\Controllers\Setup\ProductController::class, 'search_variant_values']);
                Route::get('variants', [App\Http\Controllers\Setup\ProductController::class, 'search_variants']);
                Route::post('media/{id?}', [App\Http\Controllers\Setup\ProductController::class, 'media_upload']);
            });

            Route::apiResource('products', App\Http\Controllers\Setup\ProductController::class);
            */
        });

        //Route::get('media/{id}/{type?}', [App\Http\Controllers\MediaController::class, 'show'])->name('media.show');

        //Route::apiResource('media', App\Http\Controllers\MediaController::class);

    });
});