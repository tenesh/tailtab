<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserOnboarded
{

    /**
     * @param Request $request
     * @param Closure $next
     *
     * @return RedirectResponse|Response|null
     */
    public function handle(Request $request, Closure $next): Response|RedirectResponse|null
    {
        if (! $request->user() || ! $request->user()->hasOnboard()) {
            return $request->expectsJson()
                ? abort(403, 'Your account has not complete onboarding process.')
                : redirect('onboard');
        }

        return $next($request);
    }
}
