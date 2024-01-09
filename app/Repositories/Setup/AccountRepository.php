<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
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

    
    public function getTypes()
    {
        return AccountType::select('id','name','prefix')->get();
    }
    
    public function getParents($params)
    {
        $data = $this->data;
        if (isset($params["id"])){
            $id = $params["id"];
            $findPath = Account::tree()->where("id", $id);
            $data = $data::tree()->where("id", "<>", $id);
            if ($findPath->exists()){
                $findPath = $findPath->first();
                $data->where("path", "NOT LIKE", "{$findPath->path}%");
            }
        }
        $data = $data->with(['type'])->whereAccountType($params["type"]);
        return $data->get();
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