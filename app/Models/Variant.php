<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;

    protected $fillable = ['company_id', 'name'];

    public function values($query)
    {
        return $this->hasMany(VariantValue::class);
    }
}
