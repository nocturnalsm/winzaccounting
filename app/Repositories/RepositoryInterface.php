<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Services\PaginatedList;

/**
 *
 */
interface RepositoryInterface
{

    public function getList(Request $request) : Array;
    public function getById(String $id);
    public function create(Request $request);
    public function update(String $id, Request $request);
    public function delete(String $id);

}


 ?>
