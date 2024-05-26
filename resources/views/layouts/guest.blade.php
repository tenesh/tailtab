<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TailTab</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="">
@include('components.guest.nav-bar')
@yield('content')
</body>
</html>
