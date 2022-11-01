<?php

namespace App\Models;

use App\Models\TreeSpecies;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Population extends Model
{
    use HasFactory;

    protected $table = 'population';

    protected $fillable = [
        "species_id",
        "total",
    ];

    protected $guarded = [

    ];

    protected $casts = [
        // 'created_at' => 'date',
    ];

    protected $dates = ['created_at', 'updated_at'];
/*
public function getCreatedAtAttribute($date)
{
return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d H:i');
}

public function getUpdatedAtAttribute($date)
{
return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d H:i');
} */

    public function species()
    {
        return $this->belongsTo(TreeSpecies::class);
    }

}
