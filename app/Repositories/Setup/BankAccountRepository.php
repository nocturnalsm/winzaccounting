<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use App\Repositories\Setup\AccountRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\BankAccount;
use App\Models\Bank;
use App\Models\Account;
use App\Models\AccountBalance;
use DB;

class BankAccountRepository extends BaseRepository
{
    const ACCOUNT_TYPE = 1;

    public function __construct()
    {
        $this->data = new BankAccount;
        $this->listFilters = [
            'account_name' => function($query, $key, $value){
                return $query->where(DB::raw("CONCAT(account_number, account_name)"), "LIKE", "%{$value}%");
            }
        ];
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'bank_id' => 'bail|required|exists:App\Models\Bank,id',
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
            'holder' => 'required',
            'account_id' => function($attribute, $value, $fail) use ($params){
                if ($value != ""){
                    $query = Account::where("id", $value)
                                     ->where("company_id", $params["company_id"]);
                    if (!$query->exists()){
                        $fail("Parent Account does not exist");
                    }
                }
            }
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
    public function getById(String $id)
    {
        $data = parent::getById($id);
        if ($data){
            $bank = Bank::find($data->bank_id);
            $data->bank_name = $bank->name;

            $account = Account::where("accounts.id", $data->account_id)
                                ->select("prefix", "accounts.number", "accounts.name")
                                ->leftJoin(
                                    DB::raw("account_types types"), "accounts.account_type","=","types.id"
                                )
                                ->first();

            $data->account_number = $account ? $account->prefix .$account->number : '';
            $data->account_name = $account ? $account->name : '';

            return $data;
        }
    }
    public function searchAccount($request)
    {
        $accountRepository = new AccountRepository;
        $accountRepository->setData(
            Account::whereAccountType(Account::ASSETS)
                   ->detail()                   
        );
        return $accountRepository->search($request);
    }
}
