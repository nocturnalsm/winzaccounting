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
            SettingSeeder::class,
            CompanyTypeSeeder::class,
            CompanySeeder::class,
            RoleSeeder::class,
            AccountTypeSeeder::class,
            PermissionSeeder::class,            
            UserSeeder::class,       
        ]);

    }
}
