<?php

namespace App\Http\Controllers;

use App\Http\Requests\TreeSpeciesStoreRequest;
use App\Http\Requests\TreeSpeciesUpdateRequest;
use App\Http\Resources\SoilCollection;
use App\Http\Resources\StatusCollection;
use App\Http\Resources\TreeSpeciesCollection;
use App\Http\Resources\TreeSpeciesResource;
use App\Models\Soil;
use App\Models\Status;
use App\Models\TreeSpecies;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;

class TreeSpeciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('TreeSpecies/Index', [
            'species' => new TreeSpeciesCollection(
                TreeSpecies::latest()
                    ->orderByName()
                    ->filter(Request::only('search'))
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
        return inertia("TreeSpecies/Create", [
            'soils' => new SoilCollection(Soil::all()),
            'statuses' => new StatusCollection(Status::all()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(TreeSpeciesStoreRequest $request)
    {
        TreeSpecies::create($request->all());

        return Redirect::route('tree-species.index')->with('success', 'Tree Species added.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Inertia\Response
     */
    public function show(TreeSpecies $treeSpecies)
    {
        return inertia("TreeSpecies/Show", [
            "species" => new TreeSpeciesResource($treeSpecies),
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Inertia\Response
     */
    public function edit($id)
    {
        $treeSpecies = TreeSpecies::findOrFail($id);

        return inertia('TreeSpecies/Edit', [
            "soils" => new SoilCollection(Soil::all()),
            'statuses' => new StatusCollection(Status::all()),
            'species' => new TreeSpeciesResource($treeSpecies),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(TreeSpeciesUpdateRequest $request, $id)
    {
        $treeSpecies = TreeSpecies::findOrFail($id);

        $treeSpecies->update(
            $request->validated()
        );

        return Redirect::route('tree-species.index')->with('success', 'Tree species details updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(TreeSpecies $treeSpecies)
    {
        return Redirect::route('tree-species.index')->with('success', 'Tree species added.');
    }
}
