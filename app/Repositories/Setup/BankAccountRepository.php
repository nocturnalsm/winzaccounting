<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\BankAccount;
use DB;

class BankAccountRepository extends BaseRepository
{

    public function __construct(BankAccount $bank)
    {
        $this->data = $bank;
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
        $data = $data->join("banks", "bank_accounts.bank_id", "=", "banks.id")
                     ->leftJoin("accounts", "bank_accounts.account_id", "=", "accounts.id")
                     ->leftJoin(DB::raw("account_types types"), "accounts.account_type","=","types.id")
                     ->select(
                          DB::raw("bank_accounts.*"),
                          DB::raw("banks.name AS bank_name"),
                          DB::raw("CONCAT(types.prefix, accounts.number) AS account_number"),
                          DB::raw("accounts.name AS account_name")
                       );
        return $data;
    }

    public function listFilter($data, $filter)
    {
        $data->where(function($query) use ($filter){
            foreach ($filter as $key=>$value){
                if (trim($value) != ""){
                    if ($key == 'company_id'){
                        $query->where("banks.company_id", $value);
                    }
                    else if ($key == 'bank_name'){
                        $query->where("banks.name", "LIKE", "%{$value}%");
                    }
                    else if ($key == 'account_name'){
                        $query->where(
                          DB::raw("CONCAT(types.prefix, accounts.number, accounts.name)"), "LIKE", "%{$value}%"
                        );
                    }
                    else {
                        $query->where("bank_accounts." .$key, "LIKE", "%{$value}%");
                    }
                }
            }
        });
        return $data;
    }
}
