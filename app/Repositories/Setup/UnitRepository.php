<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Unit;
use DB;

class UnitRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new Unit;   
        $this->listFilters = [
            'qty_unit_name' => [
                'key' => 'qtyunit.name', 'operator' => 'like'
            ]
        ];
    }

    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',         
            'name' => [
                'required',
                Rule::unique(Unit::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),
            ],
            'code' => [               
                Rule::unique(Unit::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('code', $params["code"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'qty_per_unit' => 'min:0|required_with:qty_unit',
            'qty_unit' => ['required_with:qty_per_unit',
                            function($attribute, $value, $fail) use ($params){
                                if ($value != "" && $value == (isset($params["id"]) ? $params["id"] : "")){
                                    $fail("Child unit cannot has the same id as the data");
                                }
                                else {
                                    if ($value != ""){
                                        $query = Unit::where("id", $value)
                                                    ->where("company_id", $params["company_id"]);                                     
                                        if (!$query->exists()){
                                            $fail("Child Unit does not exist");
                                        }
                                    }
                                }
                            }]
        ];
    }

    public function listQuery($data)
    {
        return $data->select("units.*", DB::raw("qtyunit.name as qty_unit_name"))                     
                     ->leftJoinSub(
                         Unit::select("id","name"),
                         'qtyunit',
                         function($join){
                             $join->on("units.qty_unit", "=", "qtyunit.id");
                         }
                    );
    }      
    public function getPerUnit($company_id, $unit_id)
    {
        $data = Unit::select('id','name')
                     ->where("company_id", $company_id);
        if (trim($unit_id) != ""){
            $data->where("id", "<>", $unit_id);            
        }
        return $data->get();
    }
}
