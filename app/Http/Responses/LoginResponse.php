<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Symfony\Component\HttpFoundation\Response;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request): Response
    {
        $user = auth()->user();
        $response = Array("name" => $user->name,
                          "username" => $user->username,
                          "email" => $user->email        
        );
        return response()->json($response);
    }
}