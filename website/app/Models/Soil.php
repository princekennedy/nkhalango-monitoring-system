<?php

namespace App\Models;

use App\Models\TreeSpecies;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soil extends Model
{
    use HasFactory;
    //  SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "user_id",
        "chemistry",
        "colour",
        "description",
        "name",
        "porosity",
        "structure",
        "texture",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tree_species()
    {
        return $this->hasMany(TreeSpecies::class, 'soil_id', 'id');
    }

    public function scopeOrderByName($query)
    {
        $query->orderBy('name');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            });
        });
    }
}
