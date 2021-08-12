<?php

namespace App\Http\Components;

use DB;
use App\Models\User;
use Illuminate\Http\Request;

class UserComponent
{
    public static function getList($filter, $start = 0, $limit = 10, $sortBy = "id", $order = "asc")
    {
        $query = DB::table("users")
                ->offset($start)
                ->take($limit)
                ->orderBy($sortBy, $order);
        if (is_string($filter)){
            $query = $query
                      ->where("name", "like", "%{$filter}%")
                      ->orWhere("email", "like", "%{$filter}%");
        }
        return $query->get();
    }
    public static function get($id)
    {
        return User::find($id);
    }
}
