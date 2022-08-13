<?php

namespace App\Http\Controllers;

use App\Http\Resources\LabSessionCollection;
use App\Http\Resources\LabSessionResource;
use App\Models\LabSession;
use Illuminate\Support\Facades\Request;

class LabSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia("LabSession/Index", [
            'sessions' => new LabSessionCollection(
                LabSession::latest()
                    ->paginate()
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LabSession  $labSession
     * @return \Inertia\Response
     */
    public function show(LabSession $labSession)
    {
        return \inertia("LabSession/Show", [
            "session" => new LabSessionResource($labSession->load('tree_species')),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LabSession  $labSession
     * @return \Inertia\Response
     */
    public function destroy(LabSession $labSession)
    {
        //
    }
}