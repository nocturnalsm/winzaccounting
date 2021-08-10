<?php

namespace App\Http\Components;

use DB;
use App\Models\User;
use Illuminate\Http\Request;

class UserComponent
{
    public static function getList($request)
    {
        $start = $request->start ? $request->start : 0;
        $limit = $request->limit ? $request->limit : 10;
        $sort = json_decode($request->sort);
        return DB::table("users")
                ->offset($start)
                ->take($limit)
                ->orderBy($sort->field, $sort->order)
                ->get();
    }
    public static function get($id)
    {
        return User::find($id);
    }
}