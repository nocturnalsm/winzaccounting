<?php

namespace App\Http\Controllers\Setup;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Setup\AccountService;

class AccountController extends Controller
{
    protected $account;

    public function __construct(AccountService $account)
    {
        $this->account = $account;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $this->account->getList($request);
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->account->create($request);
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = $this->account->getById($id);
        return response()->json($data);
    }
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $this->account->update($id, $request);
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = $this->account->delete($id);
        return response()->json($data);
    }

    public function search(Request $request)
    {
        $data = $this->account->search($request);
        return response()->json($data);
    }

    public function account_types()
    {
        $data = $this->account->getAccountTypes();
        return response()->json($data);
    }

    public function account_parents(Request $request)
    {                                       
        $data = $this->account->searchParents($request);
        return response()->json($data);
    }
}
