<?php

namespace Database\Factories;

use App\Models\LabSession;
use Illuminate\Database\Eloquent\Factories\Factory;

class LabSessionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LabSession::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'soil_id' => $this->faker->unique(true)->numberBetween(1, 3),
            'status_id' => $this->faker->unique(true)->numberBetween(1, 2),
            'probe_value' => $this->faker->randomFloat(2, 1, 500),
            'created_at' => $this->faker->dateTime(),
        ];
    }
}