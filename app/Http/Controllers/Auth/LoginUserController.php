<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class LoginUserController extends Controller
{
    public function view(): Response {
        return Inertia::render('Auth/LoginUserPage');
    }

    public function store(Request $request): RedirectResponse {

        $request->validate([
            'email' => 'required|string|lowercase|email|max:255',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        return redirect(route('dashboard', absolute: false));
    }
}
