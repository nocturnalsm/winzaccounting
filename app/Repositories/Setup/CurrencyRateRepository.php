<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use App\Repositories\Admin\SettingRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\CurrencyRate;
use App\Models\Currency;
use DB;

class CurrencyRateRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new CurrencyRate;
        $this->listFilters = [
            "start" => ["operator" => ">="],
            "end" => ["operator" => "<="]
        ];
    }
    public function validateUsing($request, $id = "")
    {
        $params = $request->all();
        return [
            'currency_id' => [
                'bail',
                'required',
                'exists:App\Models\Currency,id',
                function($attr, $value, $fail) use ($params){
                    $setting = new SettingRepository($params["company_id"]);
                    $defaultCurrency = $setting->get('default_currency');
                    if (trim($defaultCurrency) != ""){
                        if ($params["id"] == $defaultCurrency){
                            $fail("Default currency can only have one rate");
                        }
                    }
                }
            ],
            'start' => [            
                function($attr, $value, $fail) use ($params){
                    if (!empty($value)){
                        $value = Date("Y-m-d", strtotime($value));  
                        $query = $this->data
                                    ->whereCurrencyId($params["currency_id"])
                                    ->where(function($query) use ($value){
                                                $query->whereNotNull("end")
                                                      ->orWhere('end', ">", $value);
                                    })
                                    ->orderBy(DB::raw("(IFNULL(end, 'x'))"), 'desc'); 
                        if (!empty($params["id"])){
                            $query->where("id", "<>", $params["id"]);
                        }
                        
                        if ($query->exists()){                            
                            $data = $query->first();                                     
                            //abort(404, $data->toJson());
                            if ($value <= $data->end){                                                                
                                $fail(__("Start date you specified cannot be older than currently active rate period"));
                            }
                        }
                    }
                }
            ],
            'buy' => 'required_without:sell|min:0',
            'sell' => 'required_without:buy|min:0'
        ];
    }
    public function listQuery($data)
    {
        $data = $data->join("currencies", "currency_rates.currency_id", "=", "currencies.id")
                     ->select("currency_rates.*", "currencies.name", "currencies.company_id");
        return $data;
    }
    public function listSort($data, $sortBy, $order)
    {
        if (empty($sortBy)){
            $sortBy = DB::raw("(IFNULL(end, 'x'))");
            $oder = "desc";            
        }
        return $data->orderBy($sortBy, $order);
    }
    public function getById(String $id)
    {
        $data = parent::getById($id);
        $currency = Currency::find($data->currency_id);            
        $data->currency_name = $currency->name;
        return $data;
    }
    public function createRate(Request $request)
    {
        $this->validate($request);
        if (empty($request->start)){
            $request->merge(['start' => Date("Y-m-d")]);            
        }       
        $this->updateRate($request);
    }
    public function updateRate(Request $request)
    {       
        $this->validate($request, $request->id);
        $currentRate = $this->data
                            ->whereCurrencyId($request->currency_id)
                            ->whereNull("end")->first();
       
        if ($currentRate && $request->start <= $currentRate->start){
            $data = $this->update($currentRate->id, $request);
            return $data;
        }
        else {
            DB::transaction(function() use ($request, $currentRate){                          
                $currentRate->end = Date("Y-m-d", strtotime('-1 day', strtotime($request->start)));
                $currentRate->save();
                $data = $this->create($request);
                return $data;
            });            
        }        
    }
}
