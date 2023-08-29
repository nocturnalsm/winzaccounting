<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Fortify\UpdateUserProfileInformation;
use App\Actions\Fortify\UpdateUserPassword;
use App\Services\Admin\UserService;

class ProfileController extends Controller
{    

    public function __construct(UserService $user)
    {
        $this->user = $user;
    }

    public function profile()
    {
        $user = $this->user->getCurrent();
        return response()->json($user);
    }

    public function updateProfile(Request $request, UpdateUserProfileInformation $action)
    {
        $user = $this->user->getCurrent();
        $action->update($user, $request->all());
        return response()->json($user);
    }

    public function changePassword(Request $request, UpdateUserPassword $action)
    {
        $user = $this->user->getCurrent();
        $action->update($user, $request->all());
    }
    
    public function impersonate($id)
    {
        auth()->user()->impersonate($id);
    }

    public function leaveImpersonate()
    {
        auth()->user()->forgetImpersonate();
    }
}
