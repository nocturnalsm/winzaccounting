<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $superAdmin = Role::create(
            [
                'name' => config('auth.super_admin'),
                'guard_name' => 'web',
            ]
        );
        Role::insert([
            [
                'name' => 'Admin',
                'guard_name' => 'web',
            ],
            [
                'name' => 'Owner',
                'guard_name' => 'web',
            ],
            [
                'name' => 'Employee',
                'guard_name' => 'web',
            ]
          ]
        );

    }
}
