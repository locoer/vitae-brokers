<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\GmmSeguro;

class GmmPrecio extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'resaltar' => 'boolean',
    ];

    /**
    * Regresa el seguro al que pertenece el precio
    * 
    */
    public function seguro() {
        return $this->belongsTo(GmmSeguro::class);
    }

    /**
     * Regresa las edades disponibles de acuerdo a los precios cargados
     * 
     */
    static public function edades() {
        return self::select('edad')->groupBy('edad')->get();
    }

    /**
     * Regresa los sexos disponibles de acuerdo a los precios cargados
     * 
     */
    static public function sexos() {
        return self::select('sexo')->groupBy('sexo')->get();
    }

}
