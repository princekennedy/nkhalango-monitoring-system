<?php

namespace App\Http\Controllers;

use App\Http\Resources\WeatherCollection;
use App\Models\Weather;
use Illuminate\Http\Request;

class WeatherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request)
    {
        return inertia('Weather/Index', [
            'weather' => new WeatherCollection(Weather::latest()->paginate()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        Weather::create($request->all());

        return response()->json([
            "message" => 'Weather recorded successfully.',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Weather  $weather
     */
    public function update(Request $request, Weather $weather)
    {
        return;
    }
}
