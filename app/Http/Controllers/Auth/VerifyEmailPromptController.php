<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VerifyEmailPromptController extends Controller
{
    public function __invoke(Request $request): RedirectResponse|Response
    {
        if ($request->user()->hasVerifiedEmail()) {
            return $request->user()->is_admin
                ?
                redirect()->intended(route('admin.dashboard', absolute: false).'?verified=1')
                :
                redirect()->intended(route('customer.dashboard', absolute: false).'?verified=1');
        }

        return Inertia::render('Auth/VerifyEmailPromptPage', ['status' => session('status')]);
    }
}