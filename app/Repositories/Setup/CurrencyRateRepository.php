<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\CurrencyRate;

class CurrencyRateRepository extends BaseRepository
{

    public function __construct(CurrencyRate $currencyRate)
    {
        $this->data = $currencyRate;
    }
    public function validateUsing($params, $id = "")
    {        
        return [
            'currency_id' => 'required|exists:App\Models\Currency,id',
            'start' => [
                'required_unless:end',
                'before_or_equal:end',                
                Rule::unique(CurrencyRate::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('currency_id', $params["currency_id"])
                                   ->where('start', "<", $params["end"])                   
                                   ->where('end', ">", $params["start"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'end' => [
                'required_unless:start',
                'after_or_equal:start',                
                Rule::unique(CurrencyRate::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'buy' => 'required_unless:sell',
            'sell' => 'required_unless_buy'            
        ];
    }
}
