<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Repositories\Admin\RoleRepository;
use App\Lists\Admin\Role;
use Illuminate\Validation\Rule;
use App\Repositories\Admin\PermissionRepository;

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
        if (!$data instanceof \Illuminate\Database\Eloquent\Collection) {
            return $data->through(function($item){            
                if ($item->name == config('auth.super_admin')){                    
                    $permissions = app(PermissionRepository::class);    
                    $permissions->getData()->get()->map(function($p) use ($item) {
                        $item->permissions->push($p);
                    });
                }                
                $item->users_count = $item->users()->count();
                return $item;
            });    
        }
        return $data;
    }
    
    public function validateUsing($params, $id)
    {
        return [
            "name" => [
                'required',
                Rule::unique('roles')
                     ->where(function($query) use ($params) {
                         $query->where('company_id', $params["company_id"])
                               ->where('name', $params["name"]);
                     })
                     ->ignore($id)
            ],
            "permissions" => 'nullable|array'
        ];
    }
 
}