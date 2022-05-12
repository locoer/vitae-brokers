<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\GmmPrecio;
use App\Models\GmmSeguro;

class GmmCotizacionController extends Controller
{
    //
    /**
     * Muestra la vista para seleccionar los datos a cotizar
     * 
     * @return Inertia\Inertia
     * 
    */
    public function index () {
        return Inertia::render('SolucionesGMM',[
            'edades' => GmmPrecio::edades(),
            'sexos' => GmmPrecio::sexos(),
        ]);
    }
    
    /**
     * Genera una propuesta con los datos recibidos y regresa la vista solucionesGMM con la propuesta generada
     * 
     * @param int $edad, string $sexo
     * 
     * @return Inertia\Inertia
     * 
    */
    public function propuesta ($edad, $sexo) {
        //$seguros = new GmmSeguro();
        //$segurosDisponibles = $seguros->segurosDisponibles($edad, $sexo);

        $propuestas = GmmSeguro::with(['precios' => function ($query) use ($edad, $sexo) {
            $query->where([
                ['edad', '=', $edad],
                ['sexo', '=', $sexo]
            ]);
        },'coberturas', 'padecimientos_espera', 'planes.hospitales'])->get();

        return Inertia::render('SolucionesGMM',[
            'edades' => GmmPrecio::edades(),
            'sexos' => GmmPrecio::sexos(),
            'propuestas' => $propuestas,
        ]);
    }
}
