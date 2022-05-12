<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGmmPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gmm_plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gmm_seguro_id')->constrained();
            $table->string('nombre');
            $table->string('coaseguroAplicado');
            $table->string('deducibleAplicado');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gmm_plans');
    }
}
