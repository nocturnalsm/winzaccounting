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
    public function search(Request $request, $rules = null)
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
        if (is_array($filter)){
            if (method_exists($this, 'searchFilter')){
                $data = $this->searchFilter($data, $filter);
            }
            else {
                foreach ($filter as $key=>$flt){
                    $data->where($key, $flt);                
                }
            }
        }

        $list = new PaginatedList($data);
        $list->setFilterOperator("OR");
        
        if (is_null($rules) && method_exists($this, 'getSearchRules')){
            $rules = $this->getSearchRules();
        }

        $valueFilters = [];
        if (is_array($rules)){            
            $list->setFilterRules($rules);
            foreach ($rules as $key => $rule){
                $value = isset($flt["value"]) ? trim($flt["value"]) : trim($query);
                $valueFilters[$key] = $value;
            }
        }
        
        if (method_exists($this, 'listSort')){
            $list->useSort(function($data, $sortBy, $order){
                return $this->listSort($data, $sortBy, $order);
            });
        }

        return $list->make(1, '', $sortBy, $order, $valueFilters);

    }

}
