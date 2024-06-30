<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\Auth;
use App\Http\Controllers\Customer;
use App\Http\Middleware\EnsureIsAdmin;
use App\Http\Middleware\RedirectIfAdmin;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::get('login', [Auth\LoginUserController::class, 'view'])
        ->name('login');

    Route::post('login', [Auth\LoginUserController::class, 'store'])
        ->name('login.store');

    Route::post('logout', [Auth\LogoutUserController::class, 'destroy'])
        ->name('logout');

    Route::get('forgot-password', [Auth\ForgotPasswordController::class, 'view'])
        ->name('password.request');

    Route::post('forgot-password', [Auth\ForgotPasswordController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [Auth\ResetPasswordController::class, 'view'])
        ->name('password.reset');

    Route::post('reset-password', [Auth\ResetPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {

    Route::get('verify-email', Auth\VerifyEmailPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', Auth\VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('verify-email', [Auth\VerifyEmailNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::middleware(EnsureIsAdmin::class)->prefix('admin')->name('admin.')->group(function () {

        Route::get('/', [Admin\DashboardController::class, 'view'])->name('dashboard');
    });

    Route::middleware(RedirectIfAdmin::class)->name('customer.')->group(function () {

        Route::get('/', [Customer\DashboardController::class, 'view'])->name('dashboard');
    });
});

