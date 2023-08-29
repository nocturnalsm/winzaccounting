<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\Tag;
use DB;

class TagRepository extends BaseRepository
{   

    public function __construct()
    {
        $this->data = new Tag;
    }
    public function search(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }        
        $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);                            
        return parent::search($request, $qRules);

    }
    public function searchByType(Request $request, $type)
    {
        $this->data = $this->data->whereModelType($type);
        return $this->search($request);
    }
    
    
}
