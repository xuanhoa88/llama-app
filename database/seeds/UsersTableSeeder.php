<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = ['email' => 'admin@localhost'];
        $userModel = factory(\App\User::class)->make($data);
        $userModel->firstOrCreate($data, $userModel->getAttributes());
    }
}
