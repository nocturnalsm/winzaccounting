<?php

namespace App\Repositories;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\PaginatedList;

class BaseRepository implements RepositoryInterface
{
    protected $data;

    public function getList(Request $request) : Array
    {        
        $data = $this->data;
        
        if (method_exists($this, 'beforeGetList')){
            $data = $this->beforeGetList($this->data);
        }        

        $list = new PaginatedList($data, $request);

        if (method_exists($this, 'beforeListFilter')){
            $list->filterusing($this->beforeListFilter());
        }
        
        return $list->make();
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
