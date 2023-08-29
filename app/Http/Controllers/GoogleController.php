<?php

namespace App\Http\Controllers;

use App\Services\FeedService;
use Illuminate\Http\Request;
use App\Services\Integrations\Google;

class GoogleController extends Controller
{
   
    public function login(Request $request, Google $google)
    {        
        try {
            $data = $google->login($request);
            return response()->json($data);
        }
        catch (\Exception $e){
            abort(422, $e->getMessage());
        }
    }

    public function connect(Request $request, Google $google)
    {
        try {
            $data = $google->connect($request);
            return response()->json($data);
        }
        catch (\Exception $e){
            abort(422, $e->getMessage());
        }
    }

    public function getCalendars(Request $request, Google $google)
    {
        try {
            $data = $google->getCalendarsList($request);
            return response()->json($data);
        }
        catch (\Exception $e){
            abort(422, $e->getMessage());
        }
    }

}