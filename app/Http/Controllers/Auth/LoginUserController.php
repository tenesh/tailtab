<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class LoginUserController extends Controller
{
    public function view(): Response {
        return Inertia::render('Auth/LoginUserPage',
        ['status' => session('status'),]);
    }

    public function store(Request $request): RedirectResponse {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect(route('dashboard', absolute: false));
        }

        return back()->with('status', 'invalid-credentials');
    }
}