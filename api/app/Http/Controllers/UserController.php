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
        $sort = json_decode($request->sort);
        $users = UserComponent::getList($start, $limit, $sort->field, $sort->order);
        return response()->json($users);
    }
    public function show(Request $request, $id)
    {
        $user = UserComponent::get($id);
        return response()->json($user);
    }
}
