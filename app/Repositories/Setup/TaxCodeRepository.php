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

    public function __construct()
    {
        $this->data = new TaxCode;
        $this->listFilters =  [
            'account_name' => function($query, $key, $value){
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
            'company_id' => 'bail|required|exists:App\Models\Company,id',
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
            'account_id' => function($attribute, $value, $fail) use ($params){
                if ($value != ""){
                    $query = Account::where("id", $value)
                                     ->where("company_id", $params["company_id"]);                                     
                    if (!$query->exists()){
                        $fail("Account does not exist");
                    }
                }
            },
        ];
    }
    public function search(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }        
        return parent::search($request, $qRules);
    }
    public function getById($id)
    {        
        $data = $this->data->where("id", $id)
             ->select("*", "accounts.*")
             ->leftJoinSub(
                Account::select(
                    DB::raw("accounts.id AS linked_account_id"),
                    DB::raw("CONCAT(types.prefix, accounts.number) AS account_number"),
                    DB::raw("accounts.name AS account_name")
                )
                ->leftJoin(DB::raw("account_types types"), "accounts.account_type","=","types.id"),
                "accounts",
                function($join){
                    $join->on("tax_codes.account_id", "=", "linked_account_id");
                }
             );
        if (!$data){
            throw new \Exception("Data not found");
        }
        return $data->first();
    }
    public function searchAccount($request)
    {                       
        $accountRepository = new AccountRepository;        
        $accountRepository->setData(
            Account::whereAccountType(Account::EXPENSES)
                   ->whereCompanyId($request->company_id ?? NULL)
                   ->detail()                   
        );       
        return $accountRepository->search($request);
    }
}
