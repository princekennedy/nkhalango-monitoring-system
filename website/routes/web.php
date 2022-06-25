<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(["auth"])->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

// Users
    Route::get('users')->name('users')->uses('UsersController@index')->middleware('auth');
    Route::get('users/create')->name('users.create')->uses('UsersController@create');
    Route::post('users')->name('users.store')->uses('UsersController@store');
    Route::get('users/{user}/edit')->name('users.edit')->uses('UsersController@edit');
    Route::put('users/{user}')->name('users.update')->uses('UsersController@update');
    Route::delete('users/{user}')->name('users.destroy')->uses('UsersController@destroy');
    Route::put('users/{user}/restore')->name('users.restore')->uses('UsersController@restore');

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
