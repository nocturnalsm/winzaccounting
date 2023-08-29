<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Repositories\Admin\RoleRepository;
use App\Lists\Admin\Role;

class RoleService extends BaseService
{    
    public function __construct(RoleRepository $role, Role $list)
    {
        $this->repository = $role;
        $this->list = $list;
    }
    
    public function getList(Request $request)
    {
        $data = parent::getList($request);
        return $data->through(function($item){            
            if ($item->name == config('auth.super_admin', 'Super Admin')){
                $item->permissions->push([
                    'name' => 'All'
                ]);
            }
            else {
                $rest = $item->permissions->count() - 3;
                $item->permissions->splice(3);
                if ($rest > 0){
                    $item->permissions->push([
                        'name' => "+{$rest} more"
                    ]);
                };
            }            
            $item->users_count = $item->users()->count();
            return $item;
        });    
    }
    
    public function validateUsing($params, $id)
    {
        return [
            "name" => 'required|unique:roles,name' .(!empty($id) ? ",{$id}" : ""),
            "permissions" => 'nullable|array'
        ];
    }
 
}