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

    public function __construct()
    {
        $this->data = new Account;
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
                    ->select("laravel_cte.id", "laravel_cte.name", "accountType", "depth","path",
                             DB::raw("CONCAT(at.prefix, laravel_cte.number) AS number"),
                             "laravel_cte.parent", "laravel_cte.account_type", "at.prefix",
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
             ->depthFirst();
        return $data;
    }
    public function getTypes()
    {
        return [
            "data" => AccountType::select('id','name','prefix')->get()
        ];
    }
    public function search(Request $request, $rules = [])
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
    public function searchParents(Request $request)
    {
        $findPath = Account::tree()->where("laravel_cte.id", $request->id);
        $this->data = $this->data
                           ->where("laravel_cte.id", "<>", $request->id);
        if ($findPath->exists()){
            $findPath = $findPath->first();
            $this->data->where("path", "NOT LIKE", "{$findPath->path}%");
        }
        return $this->search($request);
    }
    public function getById(String $id)
    {
        $data = parent::getById($id);
        $typeData = AccountType::find($data->account_type);
        $data->account_type_name = $typeData->name;
        $data->prefix = $typeData->prefix;

        $parentData = Account::select("accounts.id", "prefix", "accounts.name")
                            ->leftJoin(DB::raw("account_types types"), "accounts.account_type","=","types.id")
                            ->where("accounts.id", $data->parent)
                            ->first();                              

        $data->parent_number = $parentData ? $parentData->prefix .$parentData->number : '';
        $data->parent_name = $parentData ? $parentData->name : '';
        return $data;
    }
}