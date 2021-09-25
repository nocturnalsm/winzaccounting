<?php

namespace App;

class PaginatedList
{
    protected $filterFunction;
    protected $queryFunction;
    protected $sortFunction;
    protected $filterOperator = "AND";
    protected $filterRules = [];
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
        $this->filterFunction = $this->defaultFilter();
    }
    public function make($page = 1, $limit = '', $sortBy = '', $order = 'asc', $filter = '')
    {

        $data = $this->data;

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

        if (trim($limit) != ''){
            $data = $data->limit($limit)
                         ->offset(($page - 1)*$limit);
        }

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
    protected function defaultFilter()
    {
        return function($data, $filter){            
            $data = $data->where(function($query) use ($filter){
                foreach ($filter as $key=>$value){
                    if (trim($value) != ""){
                        if (isset($this->filterRules[$key])){
                            $itemFilter = $this->filterRules[$key];
                            if ($itemFilter !== false){
                                if (is_callable($itemFilter)){
                                    $query = $itemFilter($query, $key, $value);
                                }
                                else if (is_array($itemFilter)){
                                    $key = isset($itemFilter["key"]) ? $itemFilter["key"] : $key;
                                    if (isset($itemFilter["operator"])){
                                        $value = strtolower(trim($itemFilter["operator"])) == "like" ? "%{$value}%" : $value;
                                        $query = $this->setWhere($query, $key, $itemFilter["operator"], $value);
                                    }
                                    else {
                                        $query = $this->setWhereEqual($query, $key, $value);
                                    }
                                }
                            }
                        }
                        else {
                            $query = $this->setWhereLike($query, $key, $value);
                        }
                    }
                }
          });

          return $data;
        };
    }
    public function setFilterRules($rules)
    {
        if (is_array($rules)){
            $this->filterRules = array_merge($this->filterRules, $rules);
        }
    }
    public function setFilterOperator($operator)
    {
        $this->filterOperator = $operator;
    }
    private function setWhereLike($query, $key, $value)
    {
        return $this->setWhere($query, $key, "LIKE", "%{$value}%");
    }
    private function setWhereEqual($query, $key, $value)
    {
        return $this->setWhere($query, $key, "=", $value);
    }
    private function setWhere($query, $key, $operator, $value)
    {
        if ($this->filterOperator == "AND" ){
            return $query->where($key, $operator, $value);
        }
        else if ($this->filterOperator == "OR" ){
            return $query->orWhere($key, $operator, $value);
        }
    }
}
