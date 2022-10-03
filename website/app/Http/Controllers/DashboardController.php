<?php

namespace App\Http\Controllers;

use App\Models\Population;
use App\Models\TreeSpecies;
use App\Models\User;
use App\Models\Weather;

class DashboardController extends Controller
{
    public function index()
    {
        $users = User::all();

        $totalPopulation = Population::latest()->first()->count();

        $treeSpecies = TreeSpecies::all()->count();

        $fireAlerts = Weather::latest()->active()->count();

        $tempHum = Weather::latest()->get();

        return inertia('Dashboard/Index', [
            "users" => $users,
            "totalPopulation" => $totalPopulation,
            "treeSpecies" => $treeSpecies,
            "tempHum" => $tempHum,
            "fireAlerts" => $fireAlerts,

            "data" => [
                "pie" => $this->populationBar(),
                "bar" => $this->soilsPie(),
            ],
        ]);
    }

    public function soilsPie()
    {
        return [];
    }

    public function populationBar()
    {
        return [];
    }
}