<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SoilResource extends JsonResource
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
            'colour' => $this->colour,
            'texture' => $this->texture,
            'porosity' => $this->porosity,
            'structure' => $this->structure,
            'chemistry' => $this->chemistry,
            'description' => $this->description,
        ];
    }
}
