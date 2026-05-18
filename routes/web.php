<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SugenoController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/cek-anak', function () {
    return Inertia::render('ChildForm');
});

Route::get('/cek-ibu-hamil', function () {
    return Inertia::render('PregnantForm');
});

Route::post('/calculate-child', [SugenoController::class, 'calculateChild']);
Route::get('/calculate-child', function () {
    return redirect('/cek-anak');
});

Route::post('/calculate-pregnant', [SugenoController::class, 'calculatePregnant']);
Route::get('/calculate-pregnant', function () {
    return redirect('/cek-ibu-hamil');
});
