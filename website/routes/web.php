<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LabSessionController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PopulationController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SoilController;
use App\Http\Controllers\TreeSpeciesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WeatherController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Home");
});

Route::middleware(["auth"])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /**
     * users
     */
    Route::put('users/{user}/restore')->name('user.restore')->uses('UsersController@restore');
    Route::resource("users", UserController::class)->names("user");

    Route::resource("news", NewsController::class)->names("news");
    Route::resource("soil", SoilController::class)->names("soil");
    Route::resource("tree-species", TreeSpeciesController::class)->names("tree-species");
    Route::resource("lab-sessions", LabSessionController::class)->names("lab-sessions");
    Route::resource("population", PopulationController::class)->names("population");
    Route::resource("weather", WeatherController::class)->names("weather");

    Route::resource("report", ReportController::class)->names("report");
});

// Images
Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');

// 500 error
Route::get('500', function () {
    echo "500";
});

require __DIR__ . '/auth.php';