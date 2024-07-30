<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::factory()->create([
            'name' => "System",
            'url' => 'https://winzaccounting.com',
            'system' => true
        ]);

        Company::factory(5)->create();
    }
}
