<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateGmmPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        if (Schema::hasTable('gmm_plans')) {
            // The "gmm_plans" table exists...
            Schema::table('gmm_plans', function (Blueprint $table) {
                $table->float('topeCoaseguro', 8, 2)->nullable()->after('deducibleAplicado');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        if (Schema::hasColumn('gmm_plans', 'topeCoaseguro')) {
            // The "gmm_precios" table exists and has a "precio_anual" column...
            Schema::table('gmm_plans', function (Blueprint $table) {
                $table->dropColumn('topeCoaseguro');
            });
        }
    }
}
