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
            "number" => [
                "operator" => "like",
                "key" => DB::raw("CONCAT(at.prefix, laravel_cte.number)")
            ]
        ];
    }

    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
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
            'account_type' => 'required',
            'parent' => function($attr, $value, $fail) use($params){
                            if ($value != "" && $value == (isset($params["id"]) ? $params["id"] : "")){
                                $fail("Parent account cannot has the same id as the data");
                            }
                            else {
                                if ($value != "" && $value != "0"){
                                    $query = Account::where("id", $value)
                                                    ->where("company_id", $params["company_id"]);
                                    if (!$query->exists()){
                                        $fail('Account does not exists');
                                    }
                                }
                            }
                        }
        ];
    }

    public function listQuery($data)
    {

        $constraint = function($query){
            $query->whereNull("parent")
                  ->orWhere("parent", "0");
        };



        $data = $data->treeOf($constraint)
                    ->select("laravel_cte.id", "laravel_cte.name", "accountType", "depth",
                             DB::raw("CONCAT(at.prefix, laravel_cte.number) AS number"),
                             "laravel_cte.parent", "laravel_cte.account_type",
                             DB::raw("IFNULL(balance.amount,0) AS balance")
                     )
                     ->leftJoinSub(
                         AccountType::select("id", "prefix", DB::raw("name AS accountType")),
                         "at",
                         function($join){
                             $join->on("at.id", "=", "laravel_cte.account_type");
                         }
                     )
                     ->leftJoinSub(
                          AccountBalance::select('account_id', 'amount')
                            ->where("date", "<=", Date("Y-m-d"))
                            ->orderBy("date"),
                          "balance", function($join){
                              $join->on("laravel_cte.id", "=", "balance.account_id");
                      });
        return $data;

    }
    public function listSort($data, $sortBy, $order)
    {
        $data->orderBy(DB::raw('laravel_cte.account_type'), 'asc')
             ->orderBy(DB::raw('laravel_cte.number'), 'asc')
             ->depthFirst();
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
    public function searchByNumberName(Request $request)
    {
        $qRules = [
            "number" => [
              "operator" => "like",
              "key" => DB::raw("CONCAT(at.prefix, laravel_cte.number)")
            ],
            "name"   => ["operator" => "like"]
        ];
        $filterRules = ["company_id" => []];
        return $this->search($request, $qRules, $filterRules);
    }
}
