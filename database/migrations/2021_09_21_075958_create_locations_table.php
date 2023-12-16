<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();            
            $table->string('parent_type');
            $table->unsignedInteger('parent_id');
            $table->string('latlng')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();            
            $table->string('region')->nullable();
            $table->string('province')->nullable();
            $table->string('zip_code')->nullable();
            $table->unsignedInteger('country')->nullable();
            $table->smallInteger('status_id')->nullable();
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
        Schema::dropIfExists('locations');
    }
}
