<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Repositories\Admin\StatusRepository;
use App\Lists\PaginatedList;

class StatusService extends BaseService
{    
    public function __construct(StatusRepository $status, PaginatedList $list)
    {
        $this->repository = $status;
        $this->list = $list;
    }    
    
    public function validateUsing($params, $id)
    {
        return [
            "name" => 'required|unique:roles,name' .(!empty($id) ? ",{$id}" : ""),
            "permissions" => 'nullable|array'
        ];
    }
 
}