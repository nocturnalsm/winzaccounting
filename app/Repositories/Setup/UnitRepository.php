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

    public function validateUsing($request, $id = "")
    {
        $params = $request->all();
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
                                            $fail("Child unit does not exist");
                                        }
                                    }
                                }
                            },                            
                            function($attribute, $value, $fail) use ($params){
                                if (isset($params["id"]) && $params["id"] != ""){
                                    $data = DB::table("units")
                                            ->where("qty_unit", $params["id"])
                                            ->unionAll(
                                                DB::table("units")
                                                    ->select("units.*")
                                                    ->join("tree", "tree.id", "=", "units.qty_unit")
                                            );
                                    $tree = DB::table('tree')
                                            ->withRecursiveExpression('tree', $data)
                                            ->pluck("id");                                                
                                    
                                    if (in_array($value, $tree->toArray())){
                                        $fail("This will results circular link. Choose another unit.");
                                    }
                                }
                            }                            
                        ]
        ];
    }

    public function listQuery($data)
    {
        return $data->select("*")
                    ->selectSub(
                        DB::table(DB::raw("units as child_units"))
                              ->select("name")
                              ->whereColumn("child_units.id", "units.qty_unit"),
                        'qty_unit_name'
                    );
    }
    public function search(Request $request, $rules = [])
    {
        if ($rules == []){
            $rules = ["name" => ["operator" => "like"]];
        }
        $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);        
        return parent::search($request, $rules);
    }
    public function getPerUnit(Request $request)
    {
        if (isset($request->exclude_id)){
            $this->data = $this->data
                               ->where("id", "<>", $request->exclude_id);                                    
            $findCircular = DB::table("units")
                                ->where("qty_unit", $request->exclude_id)
                                ->unionAll(
                                    DB::table("units")
                                    ->select("units.*")
                                    ->join("tree", "tree.id", "=", "units.qty_unit")
                                );
            $tree = DB::table('tree')
                        ->withRecursiveExpression('tree', $findCircular)
                        ->pluck("id");                                                            
            $this->data->whereNotIn("id", $tree->toArray());            
        }
        $this->data->orderBy("name");
        return $this->search($request);
    }
    public function getById($id)
    {
        $data = parent::getById($id);
        if ($data){
            $childUnit = Unit::find($data->qty_unit);
            $data->qty_per_unit_name = $childUnit ? $childUnit->name : '';
        }
        return $data;
    }    
}
