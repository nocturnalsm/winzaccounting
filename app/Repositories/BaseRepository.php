<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use Illuminate\Http\Request;
use App\SearchList;

class BaseRepository implements RepositoryInterface
{

    protected $listFilters;
    protected $defaultSort;
    protected $defaultOrder;
    protected $data;

    public function getData()
    {
        return $this->data;
    }

    public function getById(String $id)
    {
        $data = $this->data->whereId($id)->firstOrFail();
        return $data;
    }

    public function create(Array $params)
    {        
        $data = new $this->data;                
        $data->fill($params)->save();
        return $data;
    }

    public function update(String $id, Array $params)
    {
        $data = $this->data->findOrFail($id);
        $data->fill($params)->save();
        return $data;
    }

    public function delete(String $id)
    {        
        $data = $this->data->findOrFail($id);
        $data->delete();
    }

    public function query()
    {
        return $this->data->query();
    }
    
    public function setData($data)
    {
        $this->data = $data;
    }
    
}
