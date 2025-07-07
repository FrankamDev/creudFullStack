<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductCotroller;
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
Route::get('/products', [ProductCotroller::class, 'index'])->name('products.index');
Route::post('/products', [ProductCotroller::class, 'store'])->name('products.store');
Route::get('/products/create', [ProductCotroller::class, 'create'])->name('products.create');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
