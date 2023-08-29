<?php

namespace App\Lists\Admin;

use App\Lists\PaginatedList;

class Company extends PaginatedList
{

    public function useQuery($data)
    {        
        return $data->with(['type']);
    }


}
