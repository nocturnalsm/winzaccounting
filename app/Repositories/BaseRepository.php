<?php

namespace App\Repositories;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\PaginatedList;
use App\SearchList;

class BaseRepository implements RepositoryInterface
{
    protected $data;
    protected $filterFunction;
    protected $queryFunction;
    protected $listFilters;

    public function getList(Request $request) : Array
    {
        $data = $this->data;

        if (method_exists($this, 'listQuery')){
            $data = $this->listQuery($data);
        }

        $list = new PaginatedList($data);

        if ($this->listFilters && count($this->listFilters) > 0){
            $list->setFilterRules($this->listFilters);
        }

        if (method_exists($this, 'listFilter')){
            $list->useFilter(function($data, $filter) {
                return $this->listFilter($data, $filter);
            });
        }

        if (method_exists($this, 'listSort')){
            $list->useSort(function($data, $sortBy, $order){
                return $this->listSort($data, $sortBy, $order);
            });
        }

        $params = $request->all();
        $page = isset($params['page']) ? $params['page'] : 1;
        $limit = isset($params['limit']) ? $params['limit'] : 10;
        $sortBy = isset($params['sort']) ? $params['sort'] : '';
        $order = isset($params['order']) ? $params['order'] : 'asc';
        $filter = isset($params['filter']) ? json_decode($params['filter'], true) : '';

        return $list->make($page, $limit, $sortBy, $order, $filter);
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
    public function search(Request $request, $filterRules = [], $qRules = [])
    {
        $params = $request->all();
        $query = isset($params["q"]) ? $params["q"] : "";
        $filter = isset($params["filter"]) ? json_decode($params['filter'], true) : '';
        $sortBy = isset($params['sort']) ? $params['sort'] : '';
        $order = isset($params['order']) ? $params['order'] : 'ASC';

        $data = $this->data;
        if (method_exists($this, 'listQuery')){
            $data = $this->listQuery($data);
        }
        $list = new SearchList($data);

        $qFilter = [];
        if (is_array($qRules)){
            foreach ($qRules as $key => $rule){
                $value = isset($rule["value"]) ? trim($rule["value"]) : trim($query);
                $qFilter[$key] = $value;
            }
        }

        if (method_exists($this, 'listSort')){
            $list->useSort(function($data, $sortBy, $order){
                return $this->listSort($data, $sortBy, $order);
            });
        }

        return $list->makeList($qFilter, $qRules, $filter, $filterRules, $sortBy, $order);

    }

}
