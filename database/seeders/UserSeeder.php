<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Company;
use App\Models\Status;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        $users = User::factory()->count(10)->create();

        $companies = Company::factory(3)
                ->hasAttached($users)
                ->create();

        $admin = User::create([
            'name' => env('SUPER_ADMIN_NAME','xxxx'),
            'username' => env('SUPER_ADMIN_USERNAME', 'xxxx'),
            'email' => env('SUPER_ADMIN_EMAIL', 'xxxx@gmail.com'),
            'password' => Hash::make(env('SUPER_ADMIN_PASSWORD', 'xxxx')),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'status' => Status::whereStatus('active')->value('id')
        ]);

        $admin->companies()->attach($companies);
        $admin->assignRole('Super Admin');
    }
}
