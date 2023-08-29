<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use App\Repositories\Admin\PermissionRepository;
use App\Lists\Admin\Permission;

class PermissionService extends BaseService
{
    public function __construct(PermissionRepository $permission, Permission $list)
    {
        $this->repository = $permission;
        $this->list = $list;
    }

    public function validateUsing($params, $id = "")
    {
        return ["name" => 'required'];
    }

}