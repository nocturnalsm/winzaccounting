<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Components\UserComponent;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $start = $request->start;
        $limit = $request->limit;
        $sort = $request->sort;
        $order = $request->order;
        $filter = json_decode($request->filter);
        if (isset($filter->q)){
            $filter = $filter->q;
        }
        else {
            $filter = [];
        }
        $users = UserComponent::getList($filter, $start, $limit, $sort, $order);
        return response()->json($users);
    }
    public function show(Request $request, $id)
    {
        $user = UserComponent::get($id);
        return response()->json($user);
    }
}
