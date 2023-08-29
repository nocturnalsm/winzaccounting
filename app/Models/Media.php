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

    protected $appends = ['url', 'type', 'size', 'originalPath', 'thumbnail'];

    public function model()
    {
        return $this->morphTo();
    }

    public function getUrlAttribute()
    {
        return route('media.show', $this->id);
    }

    public function getThumbnailAttribute()
    {
        return $this->url ."/thumbnail";
    }

    public function getTypeAttribute()
    {
        return Storage::mimeType($this->filename);
    }

    public function getSizeAttribute()
    {
        return Storage::size($this->filename);
    }

    public function getOriginalPathAttribute()
    {
        return Storage::path($this->filename);
    }

    public function getThumbnailPathAttribute()
    {
        if (Storage::exists($this->filename ."-thumbnail")){
            return Storage::path($this->filename ."-thumbnail");
        }
        else {
            return $this->originalPath;
        }

    }
}
