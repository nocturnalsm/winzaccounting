<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\Models\CompanyType;

class CompanyTypeRepository extends BaseRepository
{
    protected $data;

    public function __construct(CompanyType $type)
    {
        $this->data = $type;
    }

}
