<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Role extends PaginatedList
{        
    public function useQuery($data)
    {        
        return $data->with('permissions');
    }
}