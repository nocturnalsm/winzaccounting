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

    protected $appends = ['url', 'type', 'size', 'thumbnail'];

    public function model()
    {
        return $this->morphTo();
    }

    public function getUrlAttribute()
    {
        return url('/api/media/'.$this->id);
    }

    public function getThumbnailAttribute()
    {
        return $this->url ."?thumbnail=true";
    }
    public function getContent()
    {
        return Storage::get($this->filename);
    }

    public function getTypeAttribute()
    {
        return Storage::mimeType($this->filename);
    }

    public function getThumbnail()
    {
        $thumbName = $this->filename ."-thumbnail";
        if (!Storage::exists($thumbName)){
            return $this->getContent();
        }
        else {
            return Storage::get($thumbName);
        }
    }

    public function getSizeAttribute()
    {
        return Storage::size($this->filename);
    }
}
