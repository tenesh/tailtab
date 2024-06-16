<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\LogoutUserController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\VerifyEmailNotificationController;
use App\Http\Controllers\Auth\VerifyEmailPromptController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return Inertia::render('HomePage');
});

Route::middleware('guest')->group(function () {

    Route::get('register', [RegisterUserController::class, 'view'])
        ->name('register');

    Route::post('register', [RegisterUserController::class, 'store'])
        ->name('register.store');

    Route::get('login', [LoginUserController::class, 'view'])
        ->name('login');

    Route::post('login', [LoginUserController::class, 'view'])
        ->name('login.store');

    Route::post('logout', [LogoutUserController::class, 'destroy'])
        ->name('logout');

    Route::get('forgot-password', [ForgotPasswordController::class, 'view'])
        ->name('password.request');

    Route::post('forgot-password', [ForgotPasswordController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [ForgotPasswordController::class, 'view'])
        ->name('password.reset');

    Route::post('reset-password', [ForgotPasswordController::class, 'store'])
        ->name('password.email');
});


Route::middleware('auth')->group(function () {

    Route::get('verify-email', VerifyEmailPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('verify-email', [VerifyEmailNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');
});

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', [DashboardController::class, 'view'])
        ->name('dashboard');
});


