<?php

namespace App\Services\Setup;

use App\Services\BaseService;
use Illuminate\Http\Request;
use App\Lists\Setup\Account as AccountList;
use App\Repositories\Setup\AccountRepository;
use DB;

class AccountService extends BaseService
{    
    public function __construct(AccountRepository $account, AccountList $list)
    {
        $this->repository = $account;
        $this->list = $list;
    }
    
    public function validateUsing($request, $id = "")
    {
        $params = $request->all();
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
            'number' => [
                'required',
                Rule::unique('accounts')->where(function ($query) use($params, $id) {
                    $query = $query->where('number', $params["number"])
                                   ->where('account_type', $params["account_type"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),
            ],
            'name' => [
                'required',
                Rule::unique('accounts')->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'account_type' => 'required',
            'parent' => function($attr, $value, $fail) use($params){
                            if ($value != "" && $value == (isset($params["id"]) ? $params["id"] : "")){
                                $fail("Parent account cannot has the same id as the data");
                            }
                            else {
                                if ($value != "" && $value != "0"){
                                    $query = DB::table('accounts')->where("id", $value)
                                                    ->where("company_id", $params["company_id"]);
                                    if (!$query->exists()){
                                        $fail('Account does not exists');
                                    }
                                }
                            }
                        }
        ];
    }

    /*
    public function search(Request $request)
    {
        if ($rules == []){
            $rules = [
                "number" => [
                    "operator" => "like",
                    "key" => DB::raw("CONCAT(at.prefix, laravel_cte.number)")
                ],
                "name"   => ["operator" => "like"]
            ];
        }
        if (isset($request->detail)){
            $this->data = $this->data->detail();
        }
        if (isset($request->account_type)){
            $this->data = $this->data->whereAccountType($request->account_type);
        }
        if (isset($request->company_id)){
            $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);
        }
        $this->data = $this->data
                           ->orderBy(DB::raw('laravel_cte.account_type'), 'asc')
                           ->depthFirst();

        return parent::search($request, $rules);
    }
    */   
}