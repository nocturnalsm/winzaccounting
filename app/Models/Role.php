<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Role as RoleClass;
use App\Models\Status;

class Role extends RoleClass
{
    use HasFactory;

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

}
