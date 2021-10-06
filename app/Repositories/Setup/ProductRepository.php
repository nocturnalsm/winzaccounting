<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Product;
use DB;

class ProductRepository extends BaseRepository
{

    public function __construct()
    {
        $this->data = new Product;
        $this->listFilters = [
            "category" => function($query, $key, $value){
                return
                    $query->whereHas('categories', function($query) use ($value){
                        $query->where('product_categories.id', $value);
                    });
            },
            "name" => ["operator" => "like"],
            "code" => ["operator" => "like"]
        ];

    }
    public function listQuery($data)
    {
        return $this->data->with(["categories" => function($query){
                    $query->take(3);
                }])
                ->withCount('categories');
    }
    public function validateUsing($params, $id = "")
    {
        return [
            'company_id' => 'bail|required|exists:App\Models\Company,id',
            'name' => [
                'required',
                Rule::unique(Product::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);
                    }
                    return $query;
                }),
            ],
            'code' => [
                Rule::unique(Product::class)->where(function ($query) use($params, $id) {
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
                                    $query = Product::where("id", $value)
                                                            ->where("company_id", $params["company_id"]);
                                    if (!$query->exists()){
                                        $fail('Product Category does not exists');
                                    }
                                }
                            }
                        }
        ];
    }

    /*
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
    */
    public function search(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }
        $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);
        return parent::search($request, $qRules);
    }
    public function searchParents(Request $request)
    {
        if (isset($request->exclude_id)){
            $findPath = Product::tree()->where("laravel_cte.id", $request->exclude_id);
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
        $data = $this->data->select("*")
                           ->selectSub(
                               DB::table(DB::raw("product_categories as pc"))
                                 ->select("name")
                                 ->whereColumn("pc.id", "product_categories.parent"),
                               'parent_name'
                           )
                           ->whereId($id);
        if (!$data){
            throw new \Exception("Data not found");
        }
        return $data->first();
    }
}
