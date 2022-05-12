<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGmmPadecimientoEsperasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gmm_padecimiento_esperas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gmm_seguro_id')->constrained();
            $table->string('padecimiento');
            $table->string('tiempo_espera'); 
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
        Schema::dropIfExists('gmm_padecimiento_esperas');
    }
}
