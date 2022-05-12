<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRetiroMontosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('retiro_montos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('retiro_plan_id')->constrained();
            $table->integer('edad');
            $table->float('monto_ahorro', 10, 2);
            $table->float('mensualidad_retiro', 10, 2);
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
        Schema::dropIfExists('retiro_montos');
    }
}
