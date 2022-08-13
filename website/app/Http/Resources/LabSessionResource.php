<?php

namespace App\Http\Resources;

use App\Http\Resources\SoilResource;
use App\Http\Resources\StatusResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LabSessionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('jS F, Y H:i:s a'),
            'probe_value' => $this->probe_value,
            'status' => new StatusResource($this->status),
            'soil' => new SoilResource($this->soil),
            'species' => $this->tree_species,
        ];
    }
}
