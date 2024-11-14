<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $fields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4', 'confirmed'],
        ]);
        User::create($fields);
        return to_route('auth.login');
    }


    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users'],
            'password' => ['required', 'string', 'min:4'],
        ]);

        if (Auth::attempt($fields)) {
            $request->session()->regenerate();
            return redirect()->intended();
        }

        return back()->withErrors(['email' => 'Invalid credentials'])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }

    public function edit(Request $request, User $user)
    {
        return inertia('EditProfile' ,[
            'user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $fields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'bio' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
        ]);

        if($request->hasFile('avatar')){
            $imgPath = $request->file('avatar')->store('avatars','public');
            $fields['avatar'] = '/storage/'.$imgPath;
        }
        $user->update($fields);
        return to_route('home');
    }


    

}
