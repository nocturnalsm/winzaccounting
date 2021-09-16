<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use App\PaginatedList;
use App\Models\User;
use DB;

class PermissionRepository extends BaseRepository
{

    public function __construct(Permission $permission)
    {
        $this->data = $permission;
    }
    public function listQuery($data)
    {
        return $data->select("id","name")
                   ->with(['roles' => function($query){
                          $query->withCount("users");
                   }]);
    }
    
}
