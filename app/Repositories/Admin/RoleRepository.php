<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\PaginatedList;
use DB;

class RoleRepository extends BaseRepository
{

    public function __construct(Role $role)
    {
        $this->data = $role;
    }
    public function listQuery($data)
    {
        return $this->data->with(["permissions" => function($query){
                    $query->take(3);
                }])
                ->select("id","name")
                ->withCount('users')
                ->withCount('permissions');
    }
    public function listFilter($data, $filter)
    {
        $data->where(function($query) use ($filter){
              foreach ($filter as $key=>$value){
                  if (trim($value) != ""){
                      if ($key != 'permissionName' && $key != 'users_count'){
                        $query->where($key, "LIKE", "%{$value}%");
                      }
                  }
              }
        });
        if (isset($filter['permissionName'])){
            $permissionFilter = trim($filter['permissionName']);
            if ($permissionFilter != ""){
                $data->whereHas('permissions', function($query) use ($permissionFilter){
                    $query->where('name', 'LIKE', "%{$permissionFilter}%");
                });
            }
        }
        return $data;
    }
}
