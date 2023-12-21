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
        $user = auth()->user();
        if (!$user->hasRole('Super Admin')){
            $data = $data->whereHas('users', function($query) use ($user){
                $query->where('users.id', $user->id);
            });
        }
        $data = $data->with(['type', 'status']);
        return $data;
    }


}
