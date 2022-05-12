<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGmmPreciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gmm_precios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gmm_seguro_id')->constrained();
            $table->float('monto_deducible', 8, 2);
            $table->integer('edad');
            $table->string('sexo', 100);
            $table->float('precio', 8, 2);
            $table->boolean('resaltar')->default(false);
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
        Schema::dropIfExists('gmm_precios');
    }
}
