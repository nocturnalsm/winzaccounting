<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CompanyType;

class CompanyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CompanyType::insert([
            ["type" => "Sole Proprietorship"],
            ["type" => "Partnership"],
            ["type" => "Limited Liability Company"],
            ["type" => "Corporation"],
        ]);
    }
}
