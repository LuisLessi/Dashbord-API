<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $clients = [
            [
                'id' => 1,
                'name' => 'José Ricardo',
                'email' => 'jose@gmail.com',
            ],

            [
                'id' => 2,
                'name' => 'Renato da Silva',
                'email' => 'renato@gmail.com',
            ]
        ];

        $products = [
            [
                'id' => 1,
                'name' => 'ps4',
                'price' => '2100.90',
            ]
        ];
        return response()->json([
            'clients' => $clients,
            'products' => $products 
        ]);

    }
}
