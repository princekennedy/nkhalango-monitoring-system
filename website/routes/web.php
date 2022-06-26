<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Home");
});

Route::middleware(["auth"])->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::put('users/{user}/restore')->name('user.restore')->uses('UsersController@restore');
    Route::resource("users", UserController::class)->names("user");

});

// Images
Route::get('/img/{path}', 'ImagesController@show')->where('path', '.*');

// Reports
// Route::get('reports')->name('reports')->uses('ReportsController')->middleware('auth');

// 500 error
Route::get('500', function () {
    echo $fail;
});

require __DIR__ . '/auth.php';
