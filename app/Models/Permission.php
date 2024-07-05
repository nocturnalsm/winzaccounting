<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Permission as PermissionClass;
use App\Models\Status;
use Laravel\Scout\Searchable;

class Permission extends PermissionClass
{
    use HasFactory, Searchable;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function toSearchableArray()
    {
        return [
            'name' => $this->name
        ];
    }
}
