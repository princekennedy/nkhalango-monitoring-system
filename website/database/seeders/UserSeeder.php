<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'id' => 1,
                'first_name' => 'Forester',
                'last_name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('1234'),
                'status_id' => 1,
            ],
        ];

        User::insert($users);

    }
}
