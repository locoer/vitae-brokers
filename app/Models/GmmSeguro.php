<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use App\Models\GmmPrecio;
use App\Models\GmmCobertura;
use App\Models\GmmPlan;
use App\Models\GmmPadecimientoEspera;

class GmmSeguro extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
    * Busca los precios del seguro
    * 
    */
    public function precios() {
        return $this->hasMany(GmmPrecio::class);
    }

    /**
    * Busca las coberturas del seguro
    * 
    */
    public function coberturas() {
        return $this->hasMany(GmmCobertura::class);
    }

    /**
    * Busca los planes del seguro
    * 
    */
    public function planes() {
        return $this->hasMany(GmmPlan::class);
    }

    /**
    * Busca los padecimientos con tiempo de espera del seguro
    * 
    */
    public function padecimientos_espera() {
        return $this->hasMany(GmmPadecimientoEspera::class);
    }

    /**
    * Busca los seguros con la edad y sexo solicitados
    * 
    */
    public function segurosDisponibles($edad, $sexo) {
        return $this->whereHas('precios', function (Builder $query ) use ($edad, $sexo) {
                    $query->where([
                        ['edad', '=', $edad],
                        ['sexo', '=', $sexo]
                    ]);
                })->get();
    }

}
