<?php

namespace App\Repositories;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\PaginatedList;

class BaseRepository implements RepositoryInterface
{
    protected $data;
    protected $filterFunction;
    protected $queryFunction;

    public function getList(Request $request) : Array
    {
        $data = $this->data;

        if (method_exists($this, 'listQuery')){
            $data = $this->listQuery($data);
        }

        $list = new PaginatedList($data);

        if (method_exists($this, 'listFilter')){
            $list->useFilter(function($data, $filter) {
                return $this->listFilter($data, $filter);
            });
        }

        return $list->make($request);
    }
    public function getById(String $id) : Model
    {
        $data = $this->data->where('id', $id);
        return $data->first();
    }
    public function create(Request $request) : Model
    {

    }
    public function update(String $id, Request $request) : Model
    {

    }
    public function delete(String $id)
    {

    }

}
