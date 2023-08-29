<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhoneNumbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phone_numbers', function (Blueprint $table) {
            $table->id();
            $table->string('parent_type')->index();
            $table->unsignedInteger('parent_id')->index();
            $table->string('number');
            $table->string('extension', 20)->nullable();
            $table->boolean('fax')->nullable();
            $table->boolean('fixed_line')->nullable();
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
        Schema::dropIfExists('phone_numbers');
    }
}
