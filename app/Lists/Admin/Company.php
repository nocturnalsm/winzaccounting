<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Company extends PaginatedList
{

    public function __construct()
    {
        $this->setFilterRules([
            "company_type" => function($query, $key, $value){
                return $query->orWhereHas('type', function($qry) use ($value){
                    $qry->where('type', 'LIKE', "%{$value}%");
                });
            }
        ]);
    }

    public function useQuery($data)
    {        
        return $data->with(['type', 'status']);
    }


}
