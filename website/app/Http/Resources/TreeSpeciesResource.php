<?php

namespace App\Http\Resources;

use App\Http\Resources\SoilResource;
use App\Http\Resources\StatusResource;
use Illuminate\Http\Resources\Json\JsonResource;

class TreeSpeciesResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'properties' => $this->properties,
            'status' => new StatusResource($this->status),
            'soil' => new SoilResource($this->soil),
        ];

    }
}
