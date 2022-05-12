<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGmmHospitalGmmPlanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gmm_hospital_gmm_plan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gmm_hospital_id')->constrained();
            $table->foreignId('gmm_plan_id')->constrained();
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
        Schema::dropIfExists('gmm_hospital_gmm_plan');
    }
}
