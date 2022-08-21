<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PopulationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'species_id' => $this->faker->unique(true)->numberBetween(1, 3),
            'total' => $this->faker->randomNumber(2),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}