<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;
    protected $fillable = ['company_id', 'name', 'code', 'location_id'];

    public function location()
    {
        return $this->morphOne(Location::class, 'parent');
    }
    public function numbers()
    {
        return $this->morphMany(PhoneNumber::class, 'parent');
    }
    public function emaill_addresses()
    {
        return $this->morphMany(EmailAddress::class, 'parent');
    }
}
