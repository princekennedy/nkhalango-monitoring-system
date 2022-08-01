<?php

namespace App\Http\Controllers;

use App\Http\Resources\SoilCollection;
use App\Http\Resources\SoilResource;
use App\Models\Soil;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;

class SoilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('Soil/Index', [
            'soils' => new SoilCollection(
                Soil::latest()
                    ->orderByName()
                    ->filter(Request::only('search', 'properties'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return inertia("Soil/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        auth()->user()->create(
            $request->validated()
        );

        return Redirect::route('soil.index')->with('success', 'Soil added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Soil  $soil
     * @return \Inertia\Response
     */
    public function show(Soil $soil)
    {
        return inertia("Soil/Show", [
            "soil" => new SoilResource($soil),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Soil  $soil
     * @return \Inertia\Response
     */
    public function edit(Soil $soil)
    {
        return inertia('Soil/Edit', [
            'soil' => new SoilResource($soil),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Soil  $soil
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Soil $soil)
    {
        $request->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Soil updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Soil  $soil
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Soil $soil)
    {
        $soil->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }
}
