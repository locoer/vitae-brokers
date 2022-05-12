<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\RetiroPlan;
use App\Models\RetiroMonto;

class RetiroCotizacionController extends Controller
{
    //
    /**
     * Muestra la vista para seleccionar los datos a cotizar
     * 
     * @return Inertia\Inertia
     * 
    */
    public function index () {
        return Inertia::render('SolucionesRetiro',[
            'edades' => RetiroMonto::edades(),
            'montosAhorro' => RetiroMonto::montosAhorro(),
        ]);
    }

    /**
     * Genera una propuesta con los datos recibidos y regresa la vista solucionesRetiro con la propuesta generada
     * 
     * @param int $edad
     * @param float $monto_ahorro
     * 
     * @return Inertia\Inertia
     * 
    */
    public function propuesta ($edad, $monto_ahorro) {
        $propuestas = RetiroPlan::with(['montos' => function ($query) use ($edad, $monto_ahorro) {
            $query->where([
                ['edad', '=', $edad],
                ['monto_ahorro', '=', $monto_ahorro]
            ]);
        }])->get();

        return Inertia::render('SolucionesRetiro',[
            'propuestas' => $propuestas,
        ]);
    }
}
