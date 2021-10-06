<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    protected $fillable = [
        'model_type', 'model_id', 'name'
    ];

    public function model()
    {
        return $this->morphTo();
    }

}
