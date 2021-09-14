<?php

namespace App\Repositories\Setup;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\TaxCode;

class TaxCodeRepository extends BaseRepository
{

    public function __construct(TaxCode $taxCode)
    {
        $this->data = $taxCode;
    }
    public function validateUsing($params, $id = "")
    {        
        return [
            'company_id' => 'required',
            'code' => [
                'required',                
                Rule::unique(TaxCode::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('code', $params["code"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),                
            ],
            'name' => [
                'required',                
                Rule::unique(TaxCode::class)->where(function ($query) use($params, $id) {
                    $query = $query->where('name', $params["name"])
                                   ->where('company_id', $params["company_id"]);                    
                    if ($id != ""){
                        $query = $query->where("id", "<>", $id);                        
                    }
                    return $query;
                }),
                
            ],
            'percentage' => 'required|numeric|min:0|max:100'
        ];
    }
}
