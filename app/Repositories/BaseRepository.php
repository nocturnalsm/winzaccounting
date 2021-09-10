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

        if ($validator->fails()) {
            return ["errors" => $validator->errors()];
        }        
        $data = $this->data->create($params);
        return $data;
    }
    public function update(String $id, Request $request)
    {
        $params = $request->all();        
        $validator = Validator::make($params, $this->validateUsing($params, $id));

        if ($validator->fails()) {
            Log::info("fail");
            return ["errors" => $validator->errors()];
        }          
        $data = $this->data->where("id", $id);
        $data->update($params);
        return $data;
    }
    public function delete(String $id)
    {

    }

}
