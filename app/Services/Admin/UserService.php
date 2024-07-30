<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Repositories\Admin\UserRepository;
use App\Lists\Admin\User as UserList;
use App\Models\Permission;
use App\Models\User;


class UserService extends BaseService
{
    public function __construct(UserRepository $user, UserList $list)
    {
        $this->repository = $user;
        $this->list = $list;
    }

    public function getCurrent()
    {
        $user = auth()->user(); 
        if ($user){
            $user->role = $user->getRoleNames();
            $user->companies = $user->companies()->get();
            if ($user->hasRole('Super Admin')){
                $user->permissions = Permission::all()->pluck("name");
            }
            else {
                $user->permissions = $user->getAllPermissions()->pluck("name");
            }
        }
        return $user;
    }

    public function getById($id)
    {
        $data = $this->repository->getById($id);
        $data->companies = $data->companies()->select('companies.id', 'companies.name')->get();
        $data->roles = $data->roles()->select('roles.id', 'roles.name')->get();
        return $data;
    }

    public function validateUsing($params, $id = "")
    {
        $rules = [
            "name" => 'required',
            "username" => 'required|unique:users,username' .(!empty($id) ? ",{$id}" : ""),
            "email" => [
                'email',
                'required',
                'unique:users,email' .(!empty($id) ? ",{$id}" : "")
            ],
            "roles" => 'array|nullable',
            "companies" => 'bail|required|array',
            "status_id" => [
                'rule' => 'required',
                'message' => "Status field is required"
            ]
        ];
        if ($id == ""){
            $rules["password"] = 'required';
        }
        return $rules;
    }

}
