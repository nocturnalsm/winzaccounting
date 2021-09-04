<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\Currency;

class CurrencyRepository extends BaseRepository
{

    public function __construct(Currency $currency)
    {
        $this->data = $currency;
    }
    
}
