<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TailTab</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="flex flex-col min-h-screen w-full justify-between">
<header class="py-3">
    @include('components.guest.navbar')
</header>
@yield('content')
<footer class="w-full max-w-[85rem] mx-auto text-black p-4 space-y-2">
    <div class="flex justify-center space-x-4">
        <a href="#" class="">
            <span class="sr-only">X</span>
            <x-fab-x-twitter class="h-[26px] text-secondary-900 hover:text-secondary-400" />
        </a>
        <a href="#" class="">
            <span class="sr-only">Github</span>
            <x-fab-github class="h-[26px] text-secondary-900 hover:text-secondary-400" />
        </a>
    </div>
    <div class="text-center lg:text-lg">
        <p>© 2024 {{ env('APP_NAME') }}. All rights reserved.</p>
    </div>
</footer>
@livewireScripts
</body>
</html>
