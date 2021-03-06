<?php

namespace App\Repositories;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\PaginatedList;
use App\SearchList;
use TorMorten\Eventy\Facades\Events as Eventy;

class BaseRepository implements RepositoryInterface
{
    protected $data;    
    protected $listFilters;

    public function setData($data)
    {
        $this->data = $data;
    }
    public function getList(Request $request) : Array
    {
        $request = Eventy::filter('list.get.before', $request);
        
        $data = $this->data;

        if (method_exists($this, 'listQuery')){
            $data = $this->listQuery($data);
        }
        
        $data = Eventy::filter('list.get.query', $data);        
        Eventy::action('list.get.query', $data);

        $list = new PaginatedList($data);
                
        $this->listFilters = Eventy::filter('list.get.filter_rules', $this->listFilters);
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

        $result = $list->make($page, $limit, $sortBy, $order, $filter);
        $result = Eventy::filter('list.get.after', $result, $request);
        Eventy::action('list.get.after', $result, $request);
        return $result;
    }
    public function getById(String $id)
    {        
        $data = $this->data->whereId($id)->firstOrFail();
        $data = Eventy::filter('record.get', $data, $id);
        return $data;
    }
    public function create(Request $request)
    {        
        $request = Eventy::filter('record.create.before', $request);        
        
        $validator = $this->validate($request);                       

        $data = new $this->data;
        $data->fill($request->all())->save();        
        $data = Eventy::filter('record.create.after', $data, $request);
        Eventy::action('record.create.after', $data, $request);

        return $data;
    }
    public function update(String $id, Request $request)
    {
        $request = Eventy::filter('record.update.before', $request);

        $validator = $this->validate($request, $id);

        $data = $this->data->findOrFail($id);
        $data->fill($request->all())->save();
        $data = Eventy::filter('record.update.before', $data, $request);
        Eventy::action('record.update.before', $data, $request);

        return $data;
    }
    public function delete(String $id)
    {        
        $data = Eventy::filter('record.delete.before', $id);
        if (method_exists($this, 'validateDelete')){
            $validator = $this->validateDelete();           
            $validator = Eventy::filter('record.delete.validate', $id, $validator);
        }
        $data = $this->data->find($id)->deleteOrFail();
        $data = Eventy::filter('record.delete.after', $id);
        Eventy::action('record.delete.after', $id);

        return true;
    }
    public function search(Request $request, $rules = [])
    {
        $params = $request->all();
        $query = isset($params["q"]) ? $params["q"] : "";
        $sortBy = isset($params['sort']) ? $params['sort'] : '';
        $order = isset($params['order']) ? $params['order'] : 'ASC';

        $data = $this->data;
        
        if (method_exists($this, 'listQuery')){
            $data = $this->listQuery($data);
        }
        
        $list = new SearchList($data);        
        $qFilter = [];
        if (is_array($rules)){
            foreach ($rules as $key => $rule){
                $value = isset($rule["value"]) ? trim($rule["value"]) : trim($query);
                $qFilter[$key] = $value;
            }
        }

        if (method_exists($this, 'listSort')){
            $list->useSort(function($data, $sortBy, $order){
                return $this->listSort($data, $sortBy, $order);
            });
        }

        return $list->makeList($qFilter, $rules, $sortBy, $order);

    }
    public function validate($request, $id = "")   
    {
        $validator = Validator::make($request->all(), $this->validateUsing($request, $id));        
        $validator->validateWithBag("errors"); 
        return $validator;
    }
}
