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
        //return $this->hasMany(Product::class);
    }

}
