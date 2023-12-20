<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([               
            StatusSeeder::class,         
            RoleSeeder::class,
            SettingSeeder::class,
            CompanyTypeSeeder::class,
            CompanySeeder::class,
            AccountTypeSeeder::class,
            PermissionSeeder::class,            
            UserSeeder::class,       
        ]);

    }
}
