<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankAccount extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_id', 'number', 'holder', 'account_id'
    ];

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }
}
