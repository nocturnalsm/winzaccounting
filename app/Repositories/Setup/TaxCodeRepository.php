<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\TaxCode;
use App\Models\Account;
use DB;

class TaxCodeRepository extends BaseRepository
{   

    public function __construct(TaxCode $taxCode)
    {
        $this->data = $taxCode;
        $this->listFilters =  [
            'account' => function($query, $key, $value){
                return 
                    $query->where(DB::raw("CONCAT(account_number, account_name)"), "LIKE", "%{$value}%");
            }
        ];
    }
    public function listQuery($data)
    {
        return $data->leftJoinSub(
                        Account::leftJoin(DB::raw('account_types types'), "types.id", "=", "accounts.account_type")
                               ->select(
                                    DB::raw("accounts.id AS linked_account_id"),
                                    DB::raw("CONCAT(types.prefix, accounts.number) AS account_number"),
                                    DB::raw("accounts.name AS account_name")
                                ),
                        "accounts", 
                        function($join){
                            $join->on("accounts.linked_account_id", "=", "tax_codes.account_id");
                        }
                    )
                    ->select("tax_codes.*", "account_number", "account_name");

    }
    public function validateUsing($params, $id = "")
    {        
        return [
            'company_id' => 'required',
            'code' => [
                'required',                
                Rule::unique(TaxCode::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('code', $params["code"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),                
            ],
            'name' => [
                'required',                
                Rule::unique(TaxCode::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'percentage' => 'required|numeric|min:0|max:100',
            'account_id' => 'exists:accounts,id'
        ];
    }
}
