<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Status::insert([
            ['status' => 'active', 'label' => "Active", "color" => "primary"],
            ['status' => 'pending', 'label' => "Pending", "color" => "warning"],
            ['status' => 'inactive', 'label' => "Inactive", "color" => "black"]
        ]);
    }
}
