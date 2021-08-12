<?php

namespace App\Http\Services;

use DB;
use App\Models\User;
use Illuminate\Http\Request;

class UserService
{
    public static function getList($request)
    {
        $start = isset($request["start"]) ? $request["start"] : 0;
        $limit = isset($request["limit"]) ? $request["limit"] : 10;
        $sortBy = isset($request["sort"]) ? $request["sort"] : 'id';
        $order = isset($request["order"]) ? $request["order"] : 'asc';
        $filter = isset($request["filter"]) ? $request["filter"] : "" ;

        $query = DB::table("users")
                ->offset($start)
                ->take($limit)
                ->orderBy($sortBy, $order);
        if (is_array($filter)){
            foreach ($filter as $key=>$f){
                if ($key == "q"){
                    $query = $query->where(function($q) use ($f){
                        $q->where("name", "like", "%{$f}%")
                          ->orWhere("email", "like", "%{$f}%");
                    });                            
                }
                else {
                    $query = $query->where($key, "like", "%{$f}%");
                }
            }
        }
        return $query->get();
    }
    public static function get($id)
    {
        return User::find($id);
    }
}
