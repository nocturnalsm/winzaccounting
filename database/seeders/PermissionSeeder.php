<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $permissions = [
            'list', 'create', 'update','delete','view'
        ];
        $entities = ['users', 'roles', 'permissions', 'companies'];
                
        foreach ($entities as $ent){
            foreach ($permissions as $perm){
                Permission::create(['name' => $ent ."." .$perm]);
            }
        }        
        
        $admin = Role::findByName('Admin');
        $admin->givePermissionTo([
            'users.list',
            'users.create',
            'users.update',            
            'users.delete',
            'users.view',
            'roles.list',
            'roles.create',
            'roles.update',            
            'roles.delete',
            'roles.view',
            'permissions.list',
            'permissions.view',
            'companies.list',
            'companies.view',
        ]);
    }
}
