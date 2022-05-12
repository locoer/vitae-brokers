<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\RetiroMonto;

class RetiroPlan extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * Trae los montos relacionados al plan
     * 
     * @return App\Models\RetiroMonto
     */
    public function montos() { 
        return $this->hasMany(RetiroMonto::class); 
    }
}
