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
        return Inertia::render('Auth/LoginUserPage');
    }

    public function store(Request $request): RedirectResponse {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return $request->user()->is_admin ?
                redirect(route('admin.dashboard', absolute: false)) :
                redirect(route('customer.dashboard', absolute: false));
        }

        return back()->with('error', 'Invalid credentials.');
    }
}
