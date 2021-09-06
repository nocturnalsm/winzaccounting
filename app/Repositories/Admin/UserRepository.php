<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\PaginatedList;
use App\Models\User;

class UserRepository extends BaseRepository
{

    public function __construct(User $user)
    {
        $this->data = $user;
    }

    public function listQuery($data)
    {
        return $data->select("id", "name", "username", "email")
                     ->with('roles:id,name');        
    }
    public function listFilter($data, $filter){
        $data->where(function($query) use ($filter){
              foreach ($filter as $key=>$value){
                  if (trim($value) != ""){
                      if ($key != 'roleName'){
                        $query->where($key, "LIKE", "%{$value}%");
                      }
                  }
              }
        });
        if (isset($filter['roleName'])){
            $roleFilter = trim($filter['roleName']);
            if ($roleFilter != ""){
                $data->whereHas('roles', function($query) use ($roleFilter){
                    $query->where('name', 'LIKE', "%{$roleFilter}%");
                });
            }
        }
        return $data;
    }
}
