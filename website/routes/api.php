<?php

use App\Http\Controllers\LabSessionController;
use App\Http\Controllers\PopulationController;
use App\Http\Controllers\WeatherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('lab-session/add', [LabSessionController::class, 'store']);
Route::post('population/add', [PopulationController::class, 'store']);
Route::post('weather/add', [WeatherController::class, 'store']);
