<?php

namespace App\Models;

use App\Models\Soil;
use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreeSpecies extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "soil_id",
        "status_id",
        "description",
    ];

    protected $guarded = [];

    public function soil()
    {
        return $this->belongsTo(Soil::class);
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
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
