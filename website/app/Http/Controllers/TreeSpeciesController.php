<?php

namespace App\Http\Controllers;

use App\Models\TreeSpecies;
use Illuminate\Http\Request;

class TreeSpeciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return inertia('TreeSpecies/Index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\Response
     */
    public function show(TreeSpecies $treeSpecies)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\Response
     */
    public function edit(TreeSpecies $treeSpecies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TreeSpecies $treeSpecies)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TreeSpecies  $treeSpecies
     * @return \Illuminate\Http\Response
     */
    public function destroy(TreeSpecies $treeSpecies)
    {
        //
    }
}