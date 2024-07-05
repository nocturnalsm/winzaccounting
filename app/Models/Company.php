<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Company extends Model
{
    use HasFactory, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'tax_number',
        'company_type',
        'status_id'
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
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }
    public function banks()
    {
        return $this->hasMany(Bank::class);
    }
    public function type()
    {
        return $this->belongsTo(CompanyType::class, 'company_type');
    }
    public function phoneNumbers()
    {
        return $this->morphMany(PhoneNumber::class);
    }
    public function emailAddresses()
    {
        return $this->morphMany(EmailAddress::class);
    }
    public function locations()
    {
        return $this->morphMany(Location::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
