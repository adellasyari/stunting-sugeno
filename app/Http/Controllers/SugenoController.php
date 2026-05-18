<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SugenoController extends Controller
{
    public function calculateChild(Request $request)
    {
        $validated = $request->validate([
            'gender' => 'required|string',
            'age' => 'required|numeric|min:0|max:59',
            'height' => 'required|numeric|min:0',
            'weight' => 'required|numeric|min:0',
            'environment' => 'required|string'
        ]);

        $rasio = $validated['height'] > 0 ? ($validated['weight'] / $validated['height']) * 100 : 0;

        if ($rasio < 11.5) {
            $riskScore = 60;
        } elseif ($rasio >= 11.5 && $rasio < 13.5) {
            $riskScore = 30;
        } else {
            $riskScore = 0;
        }

        if ($validated['environment'] === 'Kurang') {
            $riskScore += 30;
        } elseif ($validated['environment'] === 'Cukup') {
            $riskScore += 15;
        }

        $riskScore = min(100, max(0, $riskScore));

        if ($riskScore >= 70) {
            $status = 'Bahaya';
        } elseif ($riskScore >= 40) {
            $status = 'Waspada';
        } else {
            $status = 'Aman';
        }

        return Inertia::render('Result', [
            'tipe' => 'balita',
            'skor' => $riskScore,
            'status' => $status,
            'inputData' => $validated
        ]);
    }

    public function calculatePregnant(Request $request)
    {
        $validated = $request->validate([
            'motherAge' => 'required|numeric|min:0',
            'gestationalAge' => 'required|numeric|min:0|max:10',
            'height' => 'required|numeric|min:0',
            'lila' => 'required|numeric|min:0',
            'hb' => 'required|numeric|min:0',
            'environment' => 'required|string'
        ]);

        $riskScore = 0;

        if ($validated['lila'] < 23.5) {
            $riskScore += 40;
        }

        if ($validated['hb'] < 11.0) {
            $riskScore += 30;
        }

        if ($validated['height'] < 145) {
            $riskScore += 20;
        }

        if ($validated['environment'] === 'Kurang') {
            $riskScore += 10;
        } elseif ($validated['environment'] === 'Cukup') {
            $riskScore += 5;
        }

        $riskScore = min(100, max(0, $riskScore));

        if ($riskScore > 70) {
            $status = 'Bahaya';
        } elseif ($riskScore >= 40) {
            $status = 'Waspada';
        } else {
            $status = 'Aman';
        }

        return Inertia::render('Result', [
            'tipe' => 'ibu_hamil',
            'skor' => $riskScore,
            'status' => $status,
            'inputData' => $validated
        ]);
    }
}
