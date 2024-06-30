<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAdmin
{
    /**
     * @param Request $request
     * @param Closure $next
     *
     * @return Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()->is_admin && ! $request->is('admin/*')) {
            return redirect(route('admin.dashboard'));
        }

        return $next($request);
    }
}
