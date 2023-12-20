<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->company(),
            'company_type' => 1,
            'tax_number' => $this->faker->unique()->randomNumber(8),
            'url' => $this->faker->unique()->domainName(),
            'status_id' => \App\Models\Status::all()->random()
        ];
    }
    
}
