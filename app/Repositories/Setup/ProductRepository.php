<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use App\Repositories\MediaRepository;
use App\Repositories\TagRepository;
use App\Repositories\Setup\VarianceRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Account;
use App\Models\Tag;
use App\Models\Product;
use DB;

class ProductRepository extends BaseRepository
{
    private $media;
    private $variants;

    public function __construct()
    {
        $this->data = new Product;
        $this->media = new MediaRepository;
        $this->variants = new VarianceRepository;
        $this->tags = new TagRepository;
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
                           ->with("categories")
                           ->with("units")
                           ->with('tags')
                           ->selectSub(
                               Account::whereColumn("id", "products.account_id"),
                               'account_name'
                           )
                           ->whereId($id);
        if (!$data){
            throw new \Exception("Data not found");
        }
        return $data->first();
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
    public function searchTags($request)
    {
        return $this->tags->searchProductTags($request);        
    }
    public function getMedia($id, Request $request)
    {        
        $response = $this->media->get($id, isset($request->download));
        if (!$response){
            abort(400, 'Media cannot be loaded');
        }
        return $response;
    }
    public function uploadMedia($id, Request $request)
    {
        $product = Product::find($id);
        if ($product){
            $file = $this->media->save($product, $request);
            if (!$file){
                abort(400, 'Upload failed');
            }
            return $file;
        }
        else {
            abort(422, 'Product not found');
        }
    }
    public function deleteMedia($id)
    {
        $media = $this->media->delete($id);
        return true;
    }
    public function searchVariants(Request $request)
    {
        return $this->variants->search($request);
    }
    public function searchVariantValues(Request $request)
    {
        return $this->variants->searchValues($request);
    }
}
