<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Account;
use DB;

class AccountRepository extends BaseRepository
{

    public function __construct(Account $account)
    {
        $this->data = $account;
    }

    public function validateUsing($params, $id = "")
    {        
        return [
            'company_id' => 'required',
            'name' => [
                'required',                
                Rule::unique(Account::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'account_type' => 'required',
            'parent' => 'required'            
        ];
    }

    public function listQuery($data)
    {
        return $data->select("accounts.id", "accounts.name", 
                            "accounts.parent", "accounts.account_type",
                             DB::raw("at.name AS accountType"),
                             DB::raw("parents.name as parentName"))
                     ->with(["balances" => function($query){
                        $query->where("date", "<=", Date("Y-m-d"))
                              ->orderBy("date")
                              ->take(1);
                     }])
                     ->join(DB::raw('account_types at'), "at.id", "=", "accounts.account_type")       
                     ->leftJoin(DB::raw('accounts as parents'), "parents.id", "=", "accounts.parent");
    }

    public function listFilter($data, $filter){
        $data->where(function($query) use ($filter){
            foreach ($filter as $key=>$value){
                if (trim($value) != ""){
                    if ($key == 'accountType'){
                    $query->where("accounts.account_type", $value);
                    }
                    else {
                    $query->where("accounts." .$key, "LIKE", "%{$value}%");                        
                    }
                }
            }
        });        
        return $data;
    }
}
