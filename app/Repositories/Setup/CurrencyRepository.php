<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use App\Repositories\Admin\SettingRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Currency;
use DB;

class CurrencyRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new Currency;
    }
    public function getList(Request $request) : array
    {
        $filter = json_decode($request->filter, true);
        $company_id = $filter["company_id"];

        $defaultCurrency = $this->getDefaultCurrency($company_id);
        $rawSelect = trim($defaultCurrency) != "" ? 
                         "IF(id = {$defaultCurrency}, 1, 0) AS isDefault"
                       : "0 AS isDefault";
        $this->data = $this->data->select("*")
                                 ->addSelect(DB::raw($rawSelect));        

        return parent::getList($request);
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
            'name' => [
                'required',
                Rule::unique(Currency::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                })
            ],
            'code' => 'max:3',
            'sign' => 'max:10'
        ];
    }
    public function search(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }
        if (isset($request->company_id)){
            $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);        
            if (isset($request->default) && $request->default == "0"){            
                $defaultCurrency = $this->getDefaultCurrency($request->company_id);            
                if (trim($defaultCurrency) != ""){
                    $this->data = $this->data->where("id", "<>", $defaultCurrency);
                }
            }
        }
        return parent::search($request, $qRules);
    }
    public function getById($id)
    {        
        $data = parent::getById($id);
        if ($data){
            $defaultCurrency = $this->getDefaultCurrency($data->company_id);
            $data->isDefault = trim($defaultCurrency) != "" && $id == $defaultCurrency;            
            return $data;
        }
    }

    public function getDefaultCurrency($company_id)
    {
        $setting = new SettingRepository($company_id);
        return $setting->get('default_currency');
    }

    public function setDefaultCurrency($company_id, $value)
    {
        $setting = new SettingRepository($company_id);
        if ($value === NULL){
            $result = $setting->set("default_currency", NULL);
            return $result;
        }
        else {
            $check = Currency::find($value);
            if ($check && $check->company_id == $company_id){
                $result = $setting->set("default_currency", $value);
                return $result;
            }
        }
        return false;
    }
    public function create(Request $request)
    {        
        DB::transaction(function () use ($request) {
            $data = parent::create($request);
            if ($data){                
                if ($request->isDefault){
                    $this->setDefaultCurrency($data->company_id, $data->id);
                }
                return $data;     
            }
            return $data;
        });
    }
    public function update(String $id, Request $request)
    {                            
        DB::transaction(function () use ($id, $request) {
            $data = parent::update($id, $request);
            $defaultCurrency = $this->getDefaultCurrency($data->company_id);
            if ($request->isDefault && $defaultCurrency != $data->id){
                $this->setDefaultCurrency($data->company_id, $data->id);
            }
            else if (!$request->isDefault && $data->id == $defaultCurrency){                
                $this->setDefaultCurrency($data->company_id, NULL);                
            }
            return $data;
        });
    }
    
}
