<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'account_type',
        'company_id',
        'parent'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function type()
    {
        return $this->belongsTo(AccountType::class);
    }

    public function parent()
    {
        return $this->belongsTo(Account::class);
    }

    public function childs()
    {
        return $this->hasMany(Account::class);
    }

    public function balances()
    {
        return $this->hasMany(AccountBalance::clas);
    }
    
}
