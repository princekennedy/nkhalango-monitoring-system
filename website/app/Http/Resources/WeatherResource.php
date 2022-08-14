<?php

namespace App\Http\Resources;

use App\Http\Resources\StatusResource;
use Illuminate\Http\Resources\Json\JsonResource;

class WeatherResource extends JsonResource
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
            'humidity' => $this->humidity,
            'temperature' => $this->temperature,
            'created_at' => $this->created_at->format('jS F, Y H:i:s a'),
            'status' => new StatusResource($this->status),
        ];
    }
}
