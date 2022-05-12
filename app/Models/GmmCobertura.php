<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\GmmSeguro;

class GmmCobertura extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    /**
    * Regresa el seguro al que pertenece el precio
    * 
    */
    public function seguro() {
        return $this->belongsTo(GmmSeguro::class);
    }
}
