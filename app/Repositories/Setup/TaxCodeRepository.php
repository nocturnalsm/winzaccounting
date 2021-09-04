<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\TaxCode;

class TaxCodeRepository extends BaseRepository
{

    public function __construct(TaxCode $taxCode)
    {
        $this->data = $taxCode;
    }
    
}
