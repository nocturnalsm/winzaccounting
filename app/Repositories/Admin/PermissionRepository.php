<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\Models\Permission;

class PermissionRepository extends BaseRepository
{
    protected $data;

    public function __construct(Permission $permission)
    {
        $this->data = $permission;
    }

}
