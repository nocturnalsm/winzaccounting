<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Role as RoleClass;
use App\Models\Status;
use Laravel\Scout\Searchable;

class Role extends RoleClass
{
    use HasFactory, Searchable;

    protected $casts = [
        'system' => 'boolean'
    ];
    
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function company()
    {
        return $this->belongsTo(company::class);
    }

    public function toSearchableArray()
    {        
        return [
            'name' => $this->name
        ];
    }
    
}
