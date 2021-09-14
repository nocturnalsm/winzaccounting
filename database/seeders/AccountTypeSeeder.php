<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AccountType;

class AccountTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AccountType::insert([
            ['name' => 'Assets', 'prefix' => 1],
            ['name' => 'Liabilities', 'prefix'=> 2],
            ['name' => 'Capital', 'prefix' => 3],
            ['name' => 'Income', 'prefix' => 4],
            ['name' => 'Expenses', 'prefix' => 5],
        ]);
    }
}
