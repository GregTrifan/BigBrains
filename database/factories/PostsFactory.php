<?php

namespace Database\Factories;

use App\Models\Posts;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Posts::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'=> $this->faker->sentence,
            'content'=> $this->faker->text,
            'votes'=>$this->faker->numberBetween(0,3000),
            'views'=>$this->faker->numberBetween(0,40000)
        ];
    }
}
