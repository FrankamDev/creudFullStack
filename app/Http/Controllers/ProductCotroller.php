<?php

namespace App\Http\Controllers;
use App\Http\Controllers\ProductCotroller;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Product;
class ProductCotroller extends Controller
{

    public function index()
    {
        return Inertia::render('Products/Index', []);
    }


    public function create()
    {
        return Inertia::render('Products/Create', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable|string'
        ]);

        Product::create($request->all());
        return redirect()->route('products.index')->with('message', 'Produit ajoute avec succes');
    }


    public function show(string $id)
    {
        //
    }


    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
