<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Storage;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'model_type', 'model_id', 'filename', 'title'
    ];

    protected $appends = ['url'];
    
    public function model()
    {
        return $this->morphTo();
    }

    public function getUrlAttribute()
    {
        return url('/api/media/'.$this->id);
    }
    
}
