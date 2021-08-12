<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Services\UserService;

class UserController extends Controller
{
    public function index(Request $request)
    {               
        $users = UserService::getList($request->all());
        return response()->json($users);
    }
    public function show(Request $request, $id)
    {
        $user = UserService::get($id);
        return response()->json($user);
    }
}
