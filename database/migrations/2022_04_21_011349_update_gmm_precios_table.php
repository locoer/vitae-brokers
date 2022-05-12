<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateGmmPreciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        if (Schema::hasTable('gmm_precios')) {
            // The "gmm_precios" table exists...
            Schema::table('gmm_precios', function (Blueprint $table) {
                $table->float('precio_anual', 8, 2)->after('precio');
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
        if (Schema::hasColumn('gmm_precios', 'precio_anual')) {
            // The "gmm_precios" table exists and has a "precio_anual" column...
            Schema::table('gmm_precios', function (Blueprint $table) {
                $table->dropColumn('precio_anual');
            });
        }
    }
}
