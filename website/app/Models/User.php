<?php

namespace App\Models;

use App\Models\Soil;
use App\Models\Status;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Traits\HasRoles;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use SoftDeletes, Authenticatable, Authorizable, HasFactory, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'avatar',
        'status_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the user that owns the status.
     */
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    /**
     * Get the user that owns the status.
     */
    public function soil()
    {
        return $this->hasMany(Soil::class);
    }

    public function getNameAttribute()
    {
        return Str::ucfirst($this->first_name . ' ' . $this->last_name);
    }

    public function setPasswordAttribute($password)
    {
        if (!$password) {
            return;
        }

        $this->attributes['password'] = Hash::make($password);
    }

    /**
     * User avatar configurations
     *
     */
    public function setAvatarAttribute($avatar)
    {
        if (!$avatar) {
            return;
        }

        $this->attributes['avatar'] = $avatar instanceof UploadedFile ? $avatar->store('users') : $avatar;
    }

    public function getAvatarAttribute($avatar)
    {
        if ($avatar) {
            // return URL::to(App::make(Server::class)->fromPath($avatar, ['w' => 40, 'h' => 40, 'fit' => 'crop']));
        }
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('last_name')->orderBy('first_name');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('first_name', 'like', '%' . $search . '%')
                    ->orWhere('last_name', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%');
            });
        })->when($filters['role'] ?? null, function ($query, $role) {
            $query->whereRole($role);
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }

}
