<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use App\Repositories\MediaRepository;
use App\Repositories\TagRepository;
use App\Repositories\Setup\VarianceRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\AccountType;
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
    private $mediaFolderName = "products";

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
                           ->with(["categories", "units", "tags", "media"])                              
                           ->whereId($id);
        if (!$data){
            throw new \Exception("Data not found");
        }
        $data = $data->first();
        $account = Account::whereId($data->account_id)
                          ->select("name", "number")
                          ->selectSub(
                              AccountType::whereColumn("id", "accounts.account_type")
                                         ->select("prefix"),
                              'prefix'
                          )->first();

        $data->account_name = $account ? $account->name : '';
        $data->account_number = $account ? $account->prefix .$account->number : '';
        $variantValues = $data->variants()->get();
                
        $theValues = Array();
        $theVariants = Array();
        foreach ($variantValues as $variant){
            $theVariant = Variant::find($variant->variant_id);
            if ($theVariant){
                if (!isset($theValues[$theVariant->name])){                                
                    $theVariants[] = $theVariant;                                        
                }
                $theValues[$theVariant->name][] = $variant;
            }
        }
        $data->variantValues = $theValues;
        $data->productVariants = $theVariants;

        return $data;
                
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
        if ($id){
            $product = Product::find($id);
            if ($product){
                $media = $this->media->save($request, $this->mediaFolderName, $product);
            }
            else {
                abort(422, 'Product not found');
            }
        }
        else {                    
            $media = $this->media->save($request, $this->mediaFolderName);
        }
        if (!$media){
            abort(400, json_encode($request->all()));
        }
        return $media;        
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
        DB::transaction(function () use ($request) {
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
                    "name" => $tag["label"] ?? $tag["name"],
                    "model_type" => 'App/Product',
                    "company_id" => $request->company_id
                ]);
                $data->tags()->attach($theTag->id);
            }

            $variants = $request->productVariants ?? [];
            $variantValues = $request->variantValues ?? [];
            foreach ($variants as $variant){
                $theVariant = Variant::firstOrCreate([
                    "name" => $variant["label"] ?? $variant["name"],
                    "company_id" => $request->company_id
                ]);   
                $label = $variant["label"] ?? $variant["name"];        
                if (isset($variantValues[$label])){                
                    foreach ($variantValues[$label] as $value){
                        $theValue = VariantValue::firstOrCreate([
                            "variant_id" => $theVariant->id,
                            "value" => $value["label"] ?? $value["value"]
                        ]);
                        $data->variants()->attach($theValue->id);
                    }
                }
            }

            $this->media->sync($request->media, $data);            

            return $data;
        });        
    }
    public function update($id, Request $request)
    {
        DB::transaction(function () use ($id, $request) {
            $data = parent::update($id, $request);

            $categories = $request->categories ?? [];
            $syncCategories = [];
            foreach($categories as $category)
            {
                $syncCategories[] = $category["id"];
            }
            $data->categories()->sync($syncCategories);

            $units = $request->units ?? [];
            $syncUnits = [];
            foreach($units as $unit){
                $syncUnits[] = $unit["id"];
            }
            $data->units()->sync($syncUnits);
            
            $tags = $request->tags ?? [];
            $syncTags = [];
            foreach($tags as $tag){
                $theTag = Tag::firstOrCreate([
                    "name" => $tag["label"] ?? $tag["name"],
                    "model_type" => 'App/Product',
                    "company_id" => $request->company_id
                ]);
                $syncTags[] = $theTag->id;
            }
            $data->tags()->sync($syncTags);
            
            $variants = $request->productVariants ?? [];
            $variantValues = $request->variantValues ?? [];
            $syncVariants = [];
            foreach ($variants as $variant){
                $theVariant = Variant::firstOrCreate([
                    "name" => $variant["label"] ?? $variant["name"],
                    "company_id" => $request->company_id
                ]);   
                $label = $variant["label"] ?? $variant["name"];
                
                if (isset($variantValues[$label])){                
                    foreach ($variantValues[$label] as $value){
                        $theValue = VariantValue::firstOrCreate([
                            "variant_id" => $theVariant->id,
                            "value" => $value["label"] ?? $value["value"]
                        ]);
                        $syncVariants[] = $theValue->id;
                    }
                }
            }
            $data->variants()->sync($syncVariants);

            $this->media->sync($request->media, $data);

            return $data;
        });        
    }
}
