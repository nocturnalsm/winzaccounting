<?php

namespace App\Repositories;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
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
    public function getById(String $id)
    {
        $data = $this->data->where("id", $id);
        if (!$data){
            throw new \Exception("Data not found");
        }
        return $data->first();        
    }
    public function create(Request $request)
    {
        $params = $request->all();
        $validator = Validator::make($params, $this->validateUsing($params));
        $validator->validateWithBag("errors");

        $data = new $this->data;
        $data->fill($params)->save();
        return $validator->validated();
    }
    public function update(String $id, Request $request)
    {
        $params = $request->all();
        $validator = Validator::make($params, $this->validateUsing($params, $id));
        $validator->validateWithBag('errors');

        $data = $this->data->findOrFail($id);
        $data->fill($params)->save();
        return $validator->validated();
    }
    public function delete(String $id)
    {
        if (method_exists($this, 'validateDelete')){
            $this->validateDelete();
        }
        $data = $this->data->findOrFail($id);
        $data->delete();
        return true;
    }

}
