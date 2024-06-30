<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ForgotPasswordController extends Controller
{
    public function view(): Response
    {
        return Inertia::render('Auth/ForgotPasswordPage',);
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return back()->with('success', trans($status));
        }

        return back()->with('error', trans($status));
    }
}
