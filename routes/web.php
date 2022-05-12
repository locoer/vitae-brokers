<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\GmmCotizacionController;
use App\Http\Controllers\RetiroCotizacionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/inercia', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', function () {
    return Inertia::render('Inicio', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('inicio');

Route::get('/gastos_medicos_mayores', function () {
    return Inertia::render('LpGmm');
})->name('lp_gmm');

Route::get('/soluciones', function () {
    return Inertia::render('Soluciones');
})->name('soluciones');

Route::controller(GmmCotizacionController::class)->group(function () {
    Route::get('/soluciones/gastos-medicos-mayores', 'index')->name('soluciones.gmm');
    Route::get('/soluciones/gastos-medicos-mayores/{edad}/{sexo}', 'propuesta')
    ->whereNumber('edad')->whereAlpha('sexo')
    ->name('soluciones.gmm.propuesta');
});

Route::controller(RetiroCotizacionController::class)->group(function () {
    Route::get('/soluciones/retiro', 'index')->name('soluciones.retiro');
    Route::get('/soluciones/retiro/{edad}/{monto_ahorro}', 'propuesta')
    ->whereNumber('edad')->whereNumber('monto_ahorro')
    ->name('soluciones.retiro.propuesta');
});

Route::get('/aviso-de-privacidad', function () {
    return Inertia::render('AvisoPrivacidad');
})->name('avisodeprivacidad');

require __DIR__.'/auth.php';
