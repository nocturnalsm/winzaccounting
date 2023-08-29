<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SearchService;

class SearchController extends Controller
{
    protected $search;

    public function __construct(SearchService $search)
    {
        $this->search = $search;
    }

    public function index(Request $request)
    {
        $data = $this->search->query($request);
        return response()->json($data);
    }

}