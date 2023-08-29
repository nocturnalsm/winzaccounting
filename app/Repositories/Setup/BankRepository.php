<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Bank;
use DB;

class BankRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new Bank;
    }
    public function validateUsing($request, $id = "")
    {
        $params = $request->all();
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
    public function search(Request $request, $rules = [])
    {
        if ($rules == []){
            $rules = ["name" => ["operator" => "like"]];
        }        
        $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);                            
        return parent::search($request, $rules);
    }
    public function delete($id)
    {
        DB::transaction(function () use ($id) {
            $data = $this->data->findOrFail($id);
            $data->accounts()->delete();
            parent::delete($id);
            return true;
        });
    }
}
