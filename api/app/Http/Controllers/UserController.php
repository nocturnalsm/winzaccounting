<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Components\UserComponent;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = UserComponent::getList($request);
        return response()->json($users);
    }
    public function show(Request $request, $id)
    {
        $user = UserComponent::get($id);
        return response()->json($user);
    }
}
