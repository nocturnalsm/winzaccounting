<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');           
            $table->string('name');            
            $table->string('code')->nullable();
            $table->text('description')->nullable();
            $table->boolean('can_buy')->nullable();
            $table->boolean('can_sell')->nullable();
            $table->boolean('can_inventory')->nullable();
            $table->unsignedInteger('account_id')->nullable();            
            $table->text('tags')->nullable();
            $table->smallInteger('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
