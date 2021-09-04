<?php

namespace App;

use Illuminate\Http\Request;

class PaginatedList
{
    private $filterFunction;
    private $data;
    private $request;

    public function __construct($data, $request)
    {
        $this->data = $data;
        $this->request = $request;  
        $this->filterFunction = $this->defaultFilter();
    }
    public function make()
    {        
        $data = $this->data;
        $params = $this->request->all();
        $page = isset($params['page']) ? $params['page'] : 1;
        $limit = isset($params['limit']) ? $params['limit'] : 10;
        $sortBy = isset($params['sort']) ? $params['sort'] : '';
        $order = isset($params['order']) ? $params['order'] : 'ASC';
        $filter = isset($params['filter']) ? json_decode($params['filter'], true) : '';

        if (is_array($filter)){
            $data = ($this->filterFunction)($data, $filter);
        }
        $count = $data->count();
        $data = $data->orderBy($sortBy, $order)
                    ->take($limit)
                    ->offset(($page - 1)*$limit);

        return [
            "count" => $count,
            "data" => $data->get()
        ];
    }
    public function filterUsing($function)
    {
        if (is_callable($function)){
            $this->filterFunction = $function;
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
