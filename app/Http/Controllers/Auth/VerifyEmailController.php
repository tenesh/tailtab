<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {

        if ($request->user()->hasVerifiedEmail()) {
            return $request->user()->is_admin
                ?
                redirect()->intended(route('admin.dashboard', absolute: false).'?verified=1')
                :
                redirect()->intended(route('customer.dashboard', absolute: false).'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return $request->user()->is_admin
            ?
            redirect()->intended(route('admin.dashboard', absolute: false).'?verified=1')
            :
            redirect()->intended(route('customer.dashboard', absolute: false).'?verified=1');
    }
}