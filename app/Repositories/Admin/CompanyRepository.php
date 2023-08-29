<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyRepository extends BaseRepository
{

    public function __construct(Company $company)
    {
        $this->data = $company;
    }
    
}
