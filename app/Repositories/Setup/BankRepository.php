<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Bank;

class BankRepository extends BaseRepository
{

    public function __construct(Bank $bank)
    {
        $this->data = $bank;
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
            'name' => [
                'required',
                Rule::unique(Bank::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ]
        ];
    }
    public function search(Request $request, $qRules = [], $filterRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }
        if ($filterRules == []){
            $filterRules = ["company_id" => []];
        }
        return parent::search($request, $filterRules, $qRules);
    }

}
