<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Role extends PaginatedList
{        
    public function __construct()
    {
        $this->setFilterRules([
            "permissions" => function($query, $key, $value){
                return $query->orWhereHas('permissions', function($qry) use ($value){
                    $qry->where('name', 'LIKE', "%{$value}%");
                });
            }
        ]);
    }

    public function useQuery($data)
    {        
        return $data->with(['permissions', 'status']);
    }
}