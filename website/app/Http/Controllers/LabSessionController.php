<?php

namespace App\Http\Controllers;

use App\Http\Resources\LabSessionCollection;
use App\Http\Resources\LabSessionResource;
use App\Models\LabSession;
use App\Models\Soil;
use Illuminate\Http\Request;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        try {
            // get soil id
            $soil = Soil::whereName($request->get('soil_type'))
                ->firstOrFail();

            $created = LabSession::create([
                'probe_value' => $request->probe_value,
                'soil_id' => $soil->id,
            ]);

            return response()->json([
                "message" => "Added successfully.",
            ], 200);

        } catch (\Throwable $th) {
            return \response()->json([
                'status' => $th->getCode(),
                'message' => $th->getMessage(),
            ]);
        }
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
}