<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use App\Models\Status;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status_id = Status::whereStatus('active')->value('id');
        $superAdmin = Role::create(
            [
                'name' => config('auth.super_admin'),
                'guard_name' => 'web',
                'status_id' => $status_id
            ]
        );
        Role::insert([
            [
                'name' => 'Admin',
                'guard_name' => 'web',
                'status_id' => $status_id
            ],
            [
                'name' => 'Owner',
                'guard_name' => 'web',
                'status_id' => $status_id
            ],
            [
                'name' => 'Employee',
                'guard_name' => 'web',
                'status_id' => $status_id
            ]
          ]
        );

    }
}
