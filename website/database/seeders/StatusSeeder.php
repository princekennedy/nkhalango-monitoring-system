<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = [
            [
                'id' => 1,
                'name' => 'Active',
                'description' => 'active resource',
            ],
            [
                'id' => 2,
                'name' => 'Inactive',
                'description' => 'Inactive resource',
            ],
        ];

        Status::insert($status);

    }
}