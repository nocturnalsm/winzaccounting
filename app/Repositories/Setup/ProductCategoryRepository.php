<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\ProductCategory;
use DB;

class ProductCategoryRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new ProductCategory;
    }

    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
            'name' => [
                'required',
                Rule::unique(ProductCategory::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),
            ],
            'code' => [
                Rule::unique(ProductCategory::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('code', $params["code"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),

            ],
            'parent' => function($attr, $value, $fail) use($params){
                            if ($value != "" && $value == (isset($params["id"]) ? $params["id"] : "")){
                                $fail("Parent category cannot has the same id as the data");
                            }
                            else {
                                if ($value != "" && $value != "0"){
                                    $query = ProductCategory::where("id", $value)
                                                            ->where("company_id", $params["company_id"]);
                                    if (!$query->exists()){
                                        $fail('Product Category does not exists');
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
                    ->select("id", "name", "code", "depth", "parent", "company_id");
        return $data;

    }
    public function listSort($data, $sortBy, $order)
    {
        $data->depthFirst();
        if ($sortBy != ""){
            $data->orderBy($sortBy, $order);
        }
        return $data;
    }
    public function search(Request $request, $rules = [])
    {
        if ($rules == []){
            $rules = ["name" => ["operator" => "like"]];
        }
        if (isset($request->detail)){
            $this->data = $this->data->detail();
        }
        $this->data = $this->data
                           ->whereCompanyId($request->company_id ?? NULL)
                           ->orderBy("name","asc");
        return parent::search($request, $rules);
    }
    public function searchParents(Request $request)
    {
        if (isset($request->exclude_id)){
            $findPath = ProductCategory::tree()->where("laravel_cte.id", $request->exclude_id);
            $this->data = $this->data->where("id", "<>", $request->exclude_id);
            if ($findPath->exists()){
              $this->data->where("path", "NOT LIKE", "{$findPath->first()->path}%");
            }
            $this->data->orderBy("name");
        }
        return $this->search($request);
    }
    public function getById($id)
    {
        $data = parent::getById($id);
        if ($data){
            $parent = ProductCategory::find($data->parent);
            $data->parent_name = $parent ? $parent->name : '';
            return $data;
        }        
    }
}
