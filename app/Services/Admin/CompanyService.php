<?php

namespace App\Services\Admin;

use App\Services\BaseService;
use App\Repositories\Admin\CompanyRepository;
use Illuminate\Http\Request;
use App\Lists\Admin\Company;

class CompanyService extends BaseService
{
    public function __construct(CompanyRepository $company, Company $list)
    {
        $this->repository = $company;
        $this->list = $list;
    }

    public function validateUsing($params, $id = "")
    {
        return [            
            "name" => 'required'
        ];
    }

    public function getByDomain(Request $request)
    {
        $domain = $request->subdomain();        
        return $this->repository->getData()
                                ->whereHas('domains', function($query) use ($domain){
                                    $query->whereDomain($domain);
                                })
                                ->select('id', 'name', 'logo', 'background', 'colors')
                                ->firstOrFail();
    }
}