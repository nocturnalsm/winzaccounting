<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    use \Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;

    public function getParentKeyName()
    {
        return 'parent';
    }

    protected $fillable = [
        'code',
        'name',
        'company_id',
        'parent'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_has_category', 'category_id', 'product_id');
    }

    public function scopeDetail($query)
    {
        return $query->whereNotExists(function($query){
                        $query->from("product_categories")
                              ->whereColumn("parent", "laravel_cte.id");
                    });
    }

}
