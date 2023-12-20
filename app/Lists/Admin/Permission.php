<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Permission extends PaginatedList
{    
    public function useQuery($data)
    {        
        return $data->with(['status']);
    }
}