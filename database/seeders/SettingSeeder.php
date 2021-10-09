<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        $companies = Company::all();
        
        foreach ($companies as $company){            
            Setting::insert([
                [
                    'company_id' => $company->id, 
                    'name' => 'locale', 
                    'value' => 'id', 
                    'group' => 'general'
                ],
                [
                    'company_id' => $company->id, 
                    'name' => 'default_currency', 
                    'group' => 'general',
                    'value' => NULL
                ],
                [
                    'company_id' => $company->id, 
                    'name' => 'date_format',
                    'value' => 'd/M/Y', 
                    'group' => 'general'
                ]
            ]);
        }        
    }
}
