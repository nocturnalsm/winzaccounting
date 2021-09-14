<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Currency;

class CurrencyRepository extends BaseRepository
{

    public function __construct(Currency $currency)
    {
        $this->data = $currency;
    }
    public function validateUsing($params, $id = "")
    {        
        return [
            'company_id' => 'required',
            'name' => [
                'required',                
                Rule::unique(Currency::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'code' => 'max:3',
            'sign' => 'max:10'            
        ];
    }
}
