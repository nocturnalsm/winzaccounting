<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Repositories\Admin\UserRepository;
use App\Lists\Admin\User as UserList;
use Spatie\Permission\Models\Permission;
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
            if ($user->hasRole('Super Admin')){
                $user->permission = Permission::all()->pluck("name");
            }
            else {
                $user->permission = $user->getAllPermissions()->pluck("name");
            }
        }
        return $user;
    }

    public function validateUsing($params, $id = "")
    {
        $rules = [
            "name" => 'required',
            "email" => [
                'email',
                'required',
                'unique:users,email' .(!empty($id) ? ",{$id}" : "")
            ],
            "roles" => 'array|nullable'
        ];
        if (empty($id)){
            //$rules["password"] = 'required';
        }
        return $rules;
    }

    public function checkPermission($request)
    {
        $params = $request->all();
        $permissions = Array();
        if (isset($params["permissions"])){
            $permissions = explode(",", $params["permissions"]);
        }
        return $this->repository->checkPermission($permissions);
    }    

    public function searchUser(Request $request)
    {
        $request->validate([
            "q" => "required"
        ]);

        return $this->repository->search($request->all());

    }

}