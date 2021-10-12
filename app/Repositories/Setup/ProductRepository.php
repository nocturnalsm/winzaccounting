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
use App\Models\Variant;
use App\Models\VariantValue;
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
                if ($value != ""){
                    return
                        $query->whereHas('categories', function($query) use ($value){
                            $query->where('product_categories.id', $value);
                        });
                }
            },
            "name" => ["operator" => "like"],
            "code" => ["operator" => "like"]
        ];

    }
    public function listQuery($data)
    {
        $data = $data->with("categories")
                     ->withCount('categories');        
        return $data;
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
                               Account::select("name")->whereColumn("id", "products.account_id"),
                               'account_name'
                           )
                           ->whereId($id);
        if (!$data){
            throw new \Exception("Data not found");
        }
        $data = $data->first();
        $variantValues = $data->variants();
        

        foreach ($variantValues as $values){

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
    public function searchTags($request)
    {
        return $this->tags->searchByType($request, 'App/Product');        
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
    public function create(Request $request)
    {
        $data = parent::create($request);

        $categories = $request->categories ?? [];
        foreach($categories as $category)
        {
            $data->categories()->attach($category["id"]);
        }

        $units = $request->units ?? [];
        foreach($units as $unit){
            $data->units()->attach($unit["id"]);
        }

        $tags = $request->tags ?? [];
        foreach($tags as $tag){
            $theTag = Tag::firstOrCreate([
                "name" => $tag["label"],
                "model_type" => 'App/Product'
            ], ["company_id" => $request->company_id]);
            $data->tags()->attach($theTag->id);
        }

        $variants = $request->variants ?? [];
        $variantValues = $request->variantValues ?? [];
        foreach ($variants as $variant){
            $theVariant = Variant::firstOrCreate([
                "name" => $variant["label"]
            ], ["company_id" => $request->company_id]);            
            if (isset($variantValues[$variant["label"]])){                
                foreach ($variantValues[$variant["label"]] as $value){
                    $theValue = VariantValue::firstOrCreate([
                        "variant_id" => $theVariant->id,
                        "value" => $value["label"]
                    ]);
                    $data->variants()->attach($theValue->id);
                }
            }
        }
    }
}
