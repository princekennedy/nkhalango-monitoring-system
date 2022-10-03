<?php

namespace App\Models;

use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weather extends Model
{
    use HasFactory;

    protected $fillable = [
        "temperature",
        "humidity",
        "fire_status_id",
    ];

    protected $guarded = [];

    public function fire_status()
    {
        return $this->belongsTo(Status::class, 'fire_status_id', 'id');
    }

    public function scopeActive($query)
    {
        $query->where('fire_status_id', 1);
    }
}
