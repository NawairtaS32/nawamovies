<?php

namespace Database\Seeders;
use App\Models\User; //insert model user

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //cara membuat menambahkan data di seeder
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
        ]);
        //cara send  akun diatas agar memiliki role admin
        $admin->assignRole('admin');
    }
}
