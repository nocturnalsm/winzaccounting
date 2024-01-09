<?php

namespace App\Lists\Setup;

use App\Models\AccountType;
use App\Models\AccountBalance;
use App\Lists\PaginatedList;
use DB;

class Account extends PaginatedList
{

    public function __construct()
    {
        $this->filterOperator = "OR";
        $this->listFilters = [
            "type" => [
                "key" => "accountType",
                "operator" => 'like'
            ],
            "number" => [
                "operator" => "like",
                "key" => DB::raw("CONCAT(at.prefix, laravel_cte.number)")
            ],
            "status" => function($query, $value){
                $query->whereHas('status', function($q) use ($value){
                    $q->where('status', 'LIKE', "%{$value}%");
                });
            }
        ];
    }    

    public function useQuery($data)
    {

        $constraint = function($query){
            $query->whereNull("parent")
                  ->orWhere("parent", "0");
        };

        $data = $data->with(['status', 'parent'])                    
                    ->treeOf($constraint)
                    ->select("laravel_cte.id", "laravel_cte.name", "accountType", "depth","path",
                             "laravel_cte.number", "laravel_cte.parent", "laravel_cte.account_type", "at.prefix",
                             DB::raw("IFNULL(balance.amount,0) AS balance"),
                             'status_id'
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

    public function useSort($data, $sortBy, $order)
    {
        $data->orderBy(DB::raw('laravel_cte.account_type'), 'asc')
             ->depthFirst();
        return $data;
    }

}