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
        $company_id = request('company_id');
        $data = $data->with(['permissions', 'status'])
                     ->where(function($query) use ($company_id){
                        $query->whereDoesntHave('company');
                        if ($company_id){
                            $query->orWhereHas('company', function($query) use ($company_id){
                                $query->whereId($company_id);
                            });
                        }
                     });
                     
        return $data;
    }
}