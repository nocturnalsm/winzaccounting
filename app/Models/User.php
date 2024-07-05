<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Laravel\Scout\Searchable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
        'status_id',
        'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['avatar'];

    public function companies()
    {
        return $this->belongsToMany(Company::class, 'user_has_companies', 'user_id', 'company_id');
    }

    public function avatar():Attribute
    {
        return Attribute::make(
            function($value, $attributes) {
                $excludes = [
                    'Mr.', 'Mrs', 'Ms.', 'Dr.', 'Prof.', 'Jr.'
                ];
                if ($value){
                    return $value;
                }
                if (isset($attributes['google']) && $attributes['google']){            
                    return $attributes['google']["avatar"];
                }
                if ($attributes['name']){
                    $name_array = explode(" ", $attributes['name']);
                    return substr(implode("", array_map(function($item) use ($excludes){                            
                        if (!in_array($item, $excludes)){
                            return strtoupper($item[0]);
                        }
                    }, 
                    $name_array)), 0, 2);
                }        
            }
        );
    }
    
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function toSearchableArray(): array
    {
        return [
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email
        ];
    }
}
