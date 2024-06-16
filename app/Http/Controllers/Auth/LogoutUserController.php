<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LogoutUserController extends Controller
{

    public function destroy(Request $request): RedirectResponse {

        return redirect(route('login', absolute: false));
    }
}
