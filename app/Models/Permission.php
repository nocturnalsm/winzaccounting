<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Permission as PermissionClass;
use App\Models\Status;

class Permission extends PermissionClass
{
    use HasFactory;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
