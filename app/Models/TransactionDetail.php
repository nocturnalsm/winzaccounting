<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;
    protected $fillable = ['transaction_id', 'account_id','amount', 'pos'];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
