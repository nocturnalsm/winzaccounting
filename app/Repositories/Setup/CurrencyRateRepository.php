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
                'required_if:end,',
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
                'required_if:start,',
                'after_or_equal:start',
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
            'buy' => 'required_if:sell,',
            'sell' => 'required_if:buy,'
        ];
    }
    public function listQuery($data)
    {
        $data = $data->join("currencies", "currency_rates.currency_id", "=", "currencies.id")
                     ->select("currency_rates.*", "currencies.name", "currencies.company_id");
        return $data;
    }
}
