<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Services\PaginatedList;
use Illuminate\Database\Eloquent\Model;

/**
 *
 */
interface RepositoryInterface
{

    public function getList(Request $request) : Array;
    public function getById(String $id) : Model;
    public function create(Request $request) : Model;
    public function update(String $id, Request $request) : Model;
    public function delete(String $id);

}


 ?>
