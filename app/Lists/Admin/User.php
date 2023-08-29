<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class User extends PaginatedList
{

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
