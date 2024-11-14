<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {

    // pages


    // auth
    Route::post('/logout',[AuthController::class,'logout'])->name('auth.logout');
    Route::get("/edit/{user}",[AuthController::class,'edit'])->name('auth.edit');
    Route::post("/edit/{user}",[AuthController::class,'update'])->name('auth.update');
    //chats
    Route::get("/",[ChatController::class,'index'])->name('home');
    Route::get("/message/{conversation}",[ChatController::class,'message'])->name('chat.message');
    Route::post("/message/send",[ChatController::class,'send'])->name('chat.send');
    Route::get("/messages",[ChatController::class,'users'])->name('chat.users');
    Route::get("/messages/new/{user}",[ChatController::class,'newConversation'])->name('chat.new');


});


Route::middleware('guest')->group(function () {
    // pages
    Route::inertia('/login','Login')->name('login');
    Route::inertia('/register','Register')->name('register');

    // auth
    Route::post('/register',[AuthController::class, 'register'])->name('auth.register');
    Route::post('/login',[AuthController::class, 'login'])->name('auth.login');

    
});


