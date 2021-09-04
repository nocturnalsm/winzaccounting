<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'tax_number',
        'company_type',
        'status'
    ];

    public function currencies()
    {
        return $this->hasMany(Currency::class);
    }
    public function taxCodes()
    {
        return $this->hasMany(TaxCode::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_has_companies', 'company_id', 'user_id');
    }
}
