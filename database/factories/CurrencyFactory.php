<?php

namespace Database\Factories;

use App\Models\Currency;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CurrencyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Currency::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->country(),
            'code' => $this->faker->unique()->currencyCode(),
            'sign' => $this->faker->unique()->currencyCode(),
            'status_id' => \App\Models\Status::all()->random()        
        ];
    }
    
}
