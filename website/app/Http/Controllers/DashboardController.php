<?php

namespace App\Http\Controllers;

use App\Http\Resources\WeatherCollection;
use App\Models\LabSession;
use App\Models\Population;
use App\Models\TreeSpecies;
use App\Models\User;
use App\Models\Weather;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $users = User::latest();

        $population = Population::latest()->first()->total ?? 0;

        $totalT = Population::latest()->get();

        $census = $totalT->groupBy(function ($row) {
            return Carbon::parse($row->created_at)->format('H:i:s a');
        })->map(function ($sessions) {
            return $sessions->first()->total;
        })->take(10);

        $treeSpecies = TreeSpecies::active()->count();

        $labSessions = LabSession::with("soil")->get();

        $soilData = $labSessions->groupBy(function ($row, $key) {
            return $row->soil->name;
        })->map(function ($sessions) {
            return $sessions->count();
        });

        $weather = Weather::latest();
        $fireAlerts = $weather->active()->count();

        if ($request->wantsJson()) {
            return [
                "temp" => new WeatherCollection($weather->limit(5)->get()),
                'bar' => [
                    "series" => $census->values(),
                    "categories" => $census->keys(),
                ],
                'pie' => [
                    "labels" => $soilData->keys(),
                    "series" => $soilData->values(),
                ],
            ];
        }

        return inertia('Dashboard/Index', [
            "data" => [
                "totalUsers" => $users->get(),
                "users" => $users->limit(4)->get(),
                "population" => $population,
                "species" => $treeSpecies,
                "alerts" => $fireAlerts,
            ],
        ]);
    }
}