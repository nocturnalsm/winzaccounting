<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id', 'model_type', 'name'
    ];

    public function model()
    {
        return $this->morphTo();
    }

}
