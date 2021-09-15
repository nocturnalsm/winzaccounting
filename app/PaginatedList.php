<?php

namespace App;

use Illuminate\Http\Request;

class PaginatedList
{
    private $filterFunction;
    private $queryFunction;
    private $sortFunction;
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
        $this->filterFunction = $this->defaultFilter();
    }
    public function make(Request $request)
    {
        $data = $this->data;
        $params = $request->all();
        $page = isset($params['page']) ? $params['page'] : 1;
        $limit = isset($params['limit']) ? $params['limit'] : 10;
        $sortBy = isset($params['sort']) ? $params['sort'] : '';
        $order = isset($params['order']) ? $params['order'] : 'ASC';
        $filter = isset($params['filter']) ? json_decode($params['filter'], true) : '';

        if (is_callable($this->queryFunction)){
            $data = ($this->queryFunction)($data);
        }
        if (is_array($filter)){
            $data = ($this->filterFunction)($data, $filter);
        }
        $count = $data->count();
        if ($count <= $limit){
            $page = 1;
        }
        if (is_callable($this->sortFunction)){
            $data = ($this->sortFunction)($data, $sortBy, $order);
        }
        else {
            if ($sortBy != ''){
                $data = $data->orderBy($sortBy, $order);
            }
        }

        $data = $data->take($limit)
                     ->offset(($page - 1)*$limit);

        return [
            "count" => $count,
            "data" => $data->get()
        ];
    }
    public function useQuery($function)
    {
        if (is_callable($function)){
            $this->queryFunction = $function;
        }
    }
    public function useFilter($function)
    {
        if (is_callable($function)){
            $this->filterFunction = $function;
        }
    }
    public function useSort($function)
    {
        if (is_callable($function)){
            $this->sortFunction = $function;
        }
    }
    private function defaultFilter()
    {
        return function($data, $filter){
          $data = $data->where(function($query) use ($filter){
                foreach ($filter as $key=>$value){
                    if (trim($value) != ""){
                        $query->where($key, "LIKE", "%{$value}%");
                    }
                }
          });
          return $data;
        };
    }
}
