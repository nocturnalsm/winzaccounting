<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'code', 'name', 'description', 'primary_media_id',
        'can_sell', 'can_buy', 'can_inventory', 'account_id'
    ];
    
    protected $mediaFoldername = "products";

    /**
     * Get all of the product's tags.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'product_tags', 'product_id', 'tag_id')
                    ->orderBy("name");
    }
    public function media()
    {
        return $this->morphMany(Media::class, 'model');
    }
    public function categories()
    {
        return $this->belongsToMany(ProductCategory::class, 'product_has_categories', 'product_id', 'category_id')
                    ->orderBy("name");
    }
    public function units()
    {
        return $this->belongstoMany(Unit::class, 'product_units', 'product_id', 'unit_id')
                    ->orderBy("name");
    }
    public function variants()
    {
        return $this->belongsToMany(VariantValue::class, 'product_variants', 'product_id', 'variant_value_id')
                    ->orderBy("value");
    }   
    public function getMediaFolderName()
    {
        return $this->mediaFolderName;
    }
}
