<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class WeatherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'temperature' => $this->faker->randomFloat(2, 1, 50),
            'humidity' => $this->faker->randomFloat(2, 1, 50),
            'fire_status_id' => $this->faker->unique(true)->numberBetween(3, 4),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}