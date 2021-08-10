<?php

namespace App\Http\Components;

use DB;
use App\Models\User;
use Illuminate\Http\Request;

class UserComponent
{
    public static function getList($start = 0, $limit = 10, $sortBy = "id", $order = "asc")
    {
        return DB::table("users")
                ->offset($start)
                ->take($limit)
                ->orderBy($sortBy, $order)
                ->get();
    }
    public static function get($id)
    {
        return User::find($id);
    }
}