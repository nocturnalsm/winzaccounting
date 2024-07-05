<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Permission extends PaginatedList
{    
    public function useQuery($data)
    {        
        return $data->with(['status']);
    }

    public function useFilter($data, $filter)
    {
        $data = $data->where(function($query) use ($filter){
            foreach ($filter as $key => $value){
                if ($key == 'status'){
                    $query->orWhereHas('status', function($qry) use ($value){
                        $qry->whereId($value);
                    });
                }
                else {
                    $query->orWhere($key, "LIKE" , "%{$value}%");
                }
            }
        });
        return $data;
    }
}