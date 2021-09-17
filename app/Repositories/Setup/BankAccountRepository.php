<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\BankAccount;
use App\Models\Bank;
use App\Models\Account;
use App\Models\AccountBalance;
use DB;

class BankAccountRepository extends BaseRepository
{

    public function __construct(BankAccount $bank)
    {
        $this->data = $bank;
        $this->listFilters = [
            'account_name' => function($query, $key, $value){
                $query->where(DB::raw("CONCAT(account_number, account_name)"), "LIKE", "%{$value}%");
            }
        ];
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'bank_id' => 'required|exists:App\Models\Bank,id',
            'number' => [
                'required',
                Rule::unique(BankAccount::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('number', $params["number"])
                                   ->where('bank_id', $params["bank_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'holder' => 'required'
        ];
    }

    public function listQuery($data)
    {
        $data = $data->leftJoinSub(
                            Bank::select(
                                    DB::raw("id AS bank_id"),
                                    DB::raw("banks.name AS bank_name"),
                                    "company_id"
                             ),
                             "banks",
                             function($join){
                                $join->on("bank_accounts.bank_id", "=", "banks.bank_id");
                             }
                    )
                    ->leftJoinSub(
                        Account::select(
                            DB::raw("accounts.id AS linked_account_id"),
                            DB::raw("CONCAT(types.prefix, accounts.number) AS account_number"),
                            DB::raw("accounts.name AS account_name")
                        )
                        ->leftJoin(DB::raw("account_types types"), "accounts.account_type","=","types.id"),
                        "accounts",
                        function($join){
                            $join->on("bank_accounts.account_id", "=", "linked_account_id");
                        }
                    )
                    ->select(DB::raw("bank_accounts.*"),
                            "bank_name", "account_number", "account_name")
                    ->selectSub(AccountBalance::select("amount")
                                         ->where("date", "<=", Date("Y-m-d"))
                                         ->whereColumn("account_id", "bank_accounts.account_id")
                                         ->orderBy('date', 'desc')
                                         ->limit(1), 'balance');
        return $data;
    }

}
