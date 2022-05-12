<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'menu' => [ 
                'inicio' => 'Inicio',
                'lp_gmm' => 'Gastos Médicos Mayores',
                'soluciones' => 'Soluciones'
            ],
            'nombreEmp' => config('app.name'),
            'contacto' => [
                'w' => 'https://wa.me/+523322560175',
                'f' => 'https://facebook.com/vitaebrokers',
                't' => 'tel:+523322560175'
            ]
        ]);
    }
}
