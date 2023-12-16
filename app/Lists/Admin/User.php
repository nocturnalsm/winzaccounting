<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class User extends PaginatedList
{
    public function useFilter($data, $filter)
    {
        $data = $data->where(function($query) use ($filter){
            foreach ($filter as $key => $value){
                if ($key == 'roles'){
                    $query->orWhereHas('roles', function($qry) use ($value){
                        $qry->where('name', 'LIKE', "%{$value}%");
                    });
                }
                else if ($key == 'status'){
                    $query->orWhereHas('status', function($qry) use ($value){
                        $qry->where('status', 'LIKE', "%{$value}%");
                    });
                }
                else {
                    $query->orWhere($key, "LIKE" , "%{$value}%");
                }
            }
        });
        return $data;
    }

    public function useQuery($data)
    {        
        $company_id = request('company_id', '');
        if ($company_id){
            $data = $data->whereHas('companies', function($query) use ($company_id){
                $query->where("companies.id", $company_id);
            });
        }
        return $data->with([
            'roles:id,name', 
            'status:id,status,label,color', 
            'companies:id,name'
        ]);
    }


}
