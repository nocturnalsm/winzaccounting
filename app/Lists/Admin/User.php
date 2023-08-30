<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class User extends PaginatedList
{
    public function __construct()
    {
        $this->setFilterRules([
            "roles" => function($query, $key, $value){
                return $query->orWhereHas('roles', function($qry) use ($value){
                    $qry->where('name', 'LIKE', "%{$value}%");
                });
            },
            "status" => function($query, $key, $value){
                return $query->orWhereHas('status', function($qry) use ($value){
                    $qry->where('status', 'LIKE', "%{$value}%");
                });
            }
        ]);
    }

    public function useQuery($data)
    {        
        $company_id = request('company_id', '');
        if ($company_id){
            $data = $data->whereHas('companies', function($query) use ($company_id){
                $query->where("companies.id", $company_id);
            });
        }
        return $data->with(['roles', 'status']);
    }


}
