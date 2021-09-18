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
        $this->listFilters = [
            "type" => [
                "key" => "account_type"
            ],
            "number" => function($query, $key, $value){
                return
                    $query->where(DB::raw("CONCAT(at.prefix, accounts.number)"), "LIKE", "%{$value}%");
            }
        ];
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
        return $data->select("accounts.id", "accounts.name", "accountType",
                             DB::raw("CONCAT(at.prefix, accounts.number) AS number"),
                             "accounts.parent", "accounts.account_type",
                             DB::raw("IFNULL(balance.amount,0) AS balance")
                     )
                     ->leftJoinSub(
                         AccountType::select("id", "prefix", DB::raw("name AS accountType")),
                         "at",
                         function($join){
                             $join->on("at.id", "=", "accounts.account_type");
                         }
                     )
                     ->leftJoinSub(
                          AccountBalance::select('account_id', 'amount')
                            ->where("date", "<=", Date("Y-m-d"))
                            ->orderBy("date"),
                          "balance", function($join){
                              $join->on("accounts.id", "=", "balance.account_id");
                      });
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
    public function getParents($company_id, $type, $id = '')
    {
      if (trim($type) != "" && trim($company_id) != ""){
          $type = AccountType::find($type);
          $prefix = $type->prefix;
          $data = $type->accounts()
                  ->select('id','name', DB::raw("CONCAT('{$prefix}', number) AS number"))
                  ->where("company_id", $company_id);
          if (trim($id) != ""){
                $data->where("id", "<>", $id);
          }
          return $data->get();
      }
      return false;
    }
}
