<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\Models\Role;
use App\Models\Permission;
use DB;

class RoleRepository extends BaseRepository
{
    protected $data;

    public function __construct(Role $role)
    {
        $this->data = $role;
    }

    public function create(Array $params)
    {
        return DB::transaction(function() use ($params){
            $params["guard_name"] = "web";
            $role = parent::create($params);
            if (isset($params["permissions"])){
                $role->syncPermissions($params["permissions"]);
            }
            return $role;
        });                
    }

    public function getById(String $id)
    {
        $data = parent::getById($id);
        $role = Role::find($id);
        if ($role->name == "Super Admin"){
            $permissions = Permission::orderBy('name');
        }
        else {
            $permissions = $data->permissions()->orderBy('name');
        }
        $data->permissions = $permissions->get()
                                        ->map(function($item, $key){
                                            return $item->name;
                                        });        
        return $data;
    }

    public function update(String $id, Array $params)
    {
        return DB::transaction(function() use($id, $params){
            $role = parent::update($id, $params);            
            $role->syncPermissions($params["permissions"]);
            return $role;
        });
    }

}
