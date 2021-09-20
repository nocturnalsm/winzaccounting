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
        $this->listFilters = [
            "start" => ["operator" => ">="],
            "end" => ["operator" => "<="]
        ];
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'currency_id' => 'required|exists:App\Models\Currency,id',
            'start' => [
                'bail',
                'required_without:end',
                function($attribute, $value, $fail) use ($params){
                    if ($value != ""){
                      if (isset($params["end"])){
                          if ($params["end"] != "" && $value > $params["end"]){
                              $fail($attribute ." value has to be a date before end data");
                          }
                      }
                   }
                },
                Rule::unique(CurrencyRate::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('currency_id', $params["currency_id"]);
                    if (isset($params["end"]) && $params["start"] != ""){
                        $query->where('start', "<", $params["end"])
                              ->where('end', ">", $params["start"]);
                    }
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'end' => [
                'bail',
                'required_without:start',
                function($attribute, $value, $fail) use ($params){
                    if ($value != ""){
                      if (isset($params["start"])){
                          if ($params["start"] != "" && $value < $params["start"]){
                              $fail($attribute ." value has to be a date aftar start data");
                          }
                      }
                    }
                },
                Rule::unique(CurrencyRate::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('currency_id', $params["currency_id"]);
                    if (isset($params["start"]) && $params["end"] != ""){
                        $query->where('end', ">", $params["start"])
                              ->where('start', "<", $params["end"]);
                    }
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'buy' => 'required_without:sell',
            'sell' => 'required_without:buy'
        ];
    }
    public function listQuery($data)
    {
        $data = $data->join("currencies", "currency_rates.currency_id", "=", "currencies.id")
                     ->select("currency_rates.*", "currencies.name", "currencies.company_id");
        return $data;
    }
}
