<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function view(): Response {
        return Inertia::render('Customer/Dashboard/Page');
    }
}
