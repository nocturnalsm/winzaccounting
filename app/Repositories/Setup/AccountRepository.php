<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Account;
use App\Models\AccountType;
use App\Models\AccountBalance;
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
            'number' => [
                'required',
                Rule::unique(Account::class)->where(function ($query) use($params, $id) {
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
                Rule::unique(Account::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'account_type' => 'required'
        ];
    }

    public function listQuery($data)
    {
        return $data->select("accounts.id", "accounts.name",
                             DB::raw("CONCAT(at.prefix, accounts.number) AS number"),
                             "accounts.parent", "accounts.account_type",
                             DB::raw("at.name AS accountType"),
                             DB::raw("parents.number as parentNumber"),
                             DB::raw("parents.name as parentName"),
                             DB::raw("IFNULL(balance.amount,0) AS balance")
                     )
                     ->join(DB::raw('account_types at'), "at.id", "=", "accounts.account_type")
                     ->leftJoin(DB::raw('accounts as parents'), "parents.id", "=", "accounts.parent")
                     ->leftJoinSub(
                          AccountBalance::select('account_id', 'amount')
                            ->where("date", "<=", Date("Y-m-d"))
                            ->orderBy("date"),
                          "balance", function($join){
                              $join->on("accounts.id", "=", "balance.account_id");
                      });
    }

    public function listFilter($data, $filter)
    {
        $data->where(function($query) use ($filter){
            foreach ($filter as $key=>$value){
                if (trim($value) != ""){
                    if ($key == 'type'){
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
    public function listSort($data, $sortBy, $order)
    {
        $data->orderBy(DB::raw('accounts.account_type'), 'asc')             
             ->orderBy(DB::raw('accounts.number'), 'asc');
        return $data;
    }
    public function getTypes()
    {
        return AccountType::select('id','name','prefix')->get();
    }
    public function getParents($type)
    {
      if (trim($type) != ""){
          $type = AccountType::find($type);
          $prefix = $type->prefix;
          $data = $type->accounts()                  
                  ->select('id','name', DB::raw("CONCAT('{$prefix}', number) AS number"))
                  ->get();
          return $data;
      }
      return false;
    }
}
