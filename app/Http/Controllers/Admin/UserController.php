<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $users;

    public function __construct(\App\Repositories\Admin\UserRepository $users)
    {
        $this->users = $users;
    }
    public function index(Request $request){

        $data = $this->users->getList($request);
        return response()->json($data);

    }

}
