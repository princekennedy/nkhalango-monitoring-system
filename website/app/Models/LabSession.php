<?php

namespace App\Models;

use App\Models\Soil;
use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabSession extends Model
{
    use HasFactory;

    protected $fillable = [
        "soil_id",
        "probe_value",
    ];

    protected $casts = [
        "created_at" => 'datetime',
        "updated_at" => 'date',
    ];

    protected $guarded = [];

    public function soil()
    {
        return $this->belongsTo(Soil::class);
    }

    public function tree_species()
    {
        return $this->hasManyThrough(TreeSpecies::class, Soil::class, 'id', 'soil_id', 'soil_id');
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
