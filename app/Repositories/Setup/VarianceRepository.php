<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\Variant;
use App\Models\ProductVariant;
use DB;

class VarianceRepository extends BaseRepository
{   

    public function __construct()
    {
        $this->data = new Variant;
    }
    public function search(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["name" => ["operator" => "like"]];
        }        
        $this->data = $this->data->whereCompanyId($request->company_id ?? NULL);                            
        return parent::search($request, $qRules);

    }
    public function searchValues(Request $request, $qRules = [])
    {
        if ($qRules == []){
            $qRules = ["value" => ["operator" => "like"]];
        }        
        $this->data = $this->data->find($request->id);
        if ($this->data){
            $this->data = $this->data->values();
            return parent::search($request, $qRules);
        }
    }
    
    
}
