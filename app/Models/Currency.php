<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'name',
        'code',
        'sign',
        'status_id'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function rates()
    {
        return $this->hasMany(CurrencyRate::class);
    }

}
