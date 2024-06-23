<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OnboardUserController extends Controller
{
    public function view(): Response
    {

        return Inertia::render('Onboard/OnboardUserPage', [
            'status' => session('status'),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {

        $request->validate([
            'first_name' => 'required|string|lowercase|max:255',
            'last_name' => 'required|string|lowercase|max:255',
            'organization_name' => 'required|string|lowercase|max:255',
        ]);




        return redirect(route('dashboard', absolute: false));
    }
}
