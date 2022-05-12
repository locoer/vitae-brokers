<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\RetiroPlan;

class RetiroMonto extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * Trae los montos relacionados al plan
     * 
     * @return App\Models\RetiroPlan
     */
    public function plan() { 
        return $this->belongsTo(RetiroPlan::class); 
    }

    /**
     * Regresa las edades disponibles de acuerdo a los montos cargados
     * 
     */
    static public function edades() {
        return self::select('edad')->groupBy('edad')->get();
    }

    /**
     * Regresa los montos de ahorro disponibles de acuerdo a los montos cargados
     * 
     */
    static public function montosAhorro() {
        return self::select('monto_ahorro')->groupBy('monto_ahorro')->get();
    }
}
