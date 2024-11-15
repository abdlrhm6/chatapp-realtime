<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'AAAAAAAAAA',
            'email' => 'a@a.a',
            'password' => Hash::make('1234'),
        ]);
        User::factory()->create([
            'name' => 'BBBBBBBB',
            'email' => 'b@b.b',
            'password' => Hash::make('1234'),
        ]);
    }
}
