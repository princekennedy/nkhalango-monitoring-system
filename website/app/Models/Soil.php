<?php

namespace App\Models;

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
        'name',
        'description',
    ];

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
        }) /* ->when($filters['properties'] ?? null, function ($query, $properties) {
        $query->whereProperties($properties);
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
        if ($trashed === 'with') {
        $query->withTrashed();
        } elseif ($trashed === 'only') {
        $query->onlyTrashed();
        }
        }) */;
    }
}