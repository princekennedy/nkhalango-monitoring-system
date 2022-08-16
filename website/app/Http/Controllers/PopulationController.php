<?php

namespace App\Http\Controllers;

use App\Http\Resources\PopulationCollection;
use App\Models\Population;
use Illuminate\Http\Request;

class PopulationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('Population/Index', [
            'population' => new PopulationCollection(
                Population::latest()
                    ->paginate()
            ),
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        Population::create($request->all());

        return response()->json([
            "message" => 'Population recorded successfully.',
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Population  $population
     */
    public function update(Request $request, Population $population)
    {
        return;
    }
}