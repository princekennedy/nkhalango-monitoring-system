<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('User/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => new UserCollection(
                Auth::user()
                    ->orderByName()
                    ->filter(Request::only('search', 'role', 'trashed'))
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
        return inertia("User/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\UserStoreRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(UserStoreRequest $request)
    {
        auth()->user()->create(
            $request->validated()
        );

        return Redirect::route('user.index')->with('success', 'User created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Inertia\Response
     */
    public function show(User $user)
    {
        return inertia("User/Show", [
            "user" => new UserResource($user),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserResource($user),
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(User $user, UserUpdateRequest $request)
    {
        $user->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'User updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user, UserDeleteRequest $request)
    {
        $user->delete();

        return Redirect::back()->with('success', 'User deleted.');

    }

    /**
     * Restore the specified resource from trash.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(User $user)
    {
        $user->restore();

        return Redirect::back()->with('success', 'User restored.');
    }

}
