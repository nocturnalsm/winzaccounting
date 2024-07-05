<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Role extends PaginatedList
{        
    public function __construct()
    {
        $this->setFilterRules([
            "permissions" => function($query, $key, $value){
                return $query->orWhere(function($query) use ($value){
                    $query->whereHas('permissions', function($qry) use ($value){
                        $qry->whereIn('id', $value);
                    })
                    ->orWhere('name', "Super Admin");
                });
            },
            "status" => function($query, $key, $value){
                return $query->orWhereHas('status', function($qry) use ($value){
                    $qry->whereId($value);
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