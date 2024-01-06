<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;
    use \Staudenmeir\LaravelAdjacencyList\Eloquent\HasRecursiveRelationships;
    
    const ASSETS = 1;
    const LIABILITIES = 2;
    const CAPITAL = 3;
    const INCOME = 4;
    const EXPENSES = 5;

    public function getParentKeyName()
    {
        return 'parent';
    }

    protected $protected = ['id'];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function type()
    {
        return $this->belongsTo(AccountType::class);
    }
   
    public function balances()
    {
        return $this->hasMany(AccountBalance::class);
    }    

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function scopeDetail($query)
    {
        return $query->whereNotExists(function($query){
                        $query->from("accounts")
                              ->whereColumn("parent", "laravel_cte.id");
                    });
    }
    
}
