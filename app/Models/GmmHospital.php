<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\GmmPlan;

class GmmHospital extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
    * Regresa los planes a los que pertenece el hospital
    * 
    */
    public function planes() {
        return $this->belongsToMany(GmmPlan::class)->withTimestamps();
    }
}
