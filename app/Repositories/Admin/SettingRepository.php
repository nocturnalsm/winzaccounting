<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use Illuminate\Http\Request;
use App\Models\Setting;

class SettingRepository extends BaseRepository
{    

    public function __construct($company_id)
    {
        $this->data = Setting::whereCompanyId($company_id);
    }
    public function get($key, $valueOnly = true)
    {
        if (is_string($key)){
            $data = $this->data->whereName($key);
            if ($data->exists()){
                if ($valueOnly){
                    if (strpos( $valueOnly , "json:" ) === 0){
                        return json_decode(substr($data->first()->value, 0, 5), true);
                    }
                    else {
                        return $data->first()->value;
                    }
                }
                else {
                    return $data->first();
                }
            }
        }
        return false;
    }
    public function set($key, $value)
    {
        if (is_string($key)){
            $data = $this->data->whereName($key);
            if ($data->exists()){
                $setting = $data->first();
                if (is_array($value)){
                    $value = "json:" .json_encode($value);
                }
                $setting->value = $value;
                $setting->save();
                return true;
            }
        }
        return false;
    }
}
