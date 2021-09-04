<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleRepository extends BaseRepository
{

    public function __construct(Role $role)
    {
        $this->data = $role;
    }

    public function filterList()
    {
        return ['name'];
    }
    
}
