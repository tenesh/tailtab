<div class="flex items-center justify-between w-full max-w-[85rem] mx-auto text-secondary-900 p-4">
    <p class="text-3xl lg:text-4xl">{{ env('APP_NAME') }}</p>
    <div class="hidden lg:flex items-center space-x-8 text-lg">
        <ul class="flex space-x-8">
            <li class="cursor-pointer">
                Pricing
            </li>
        </ul>
        @guest
            <a href="/register" class="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-secondary-400">
                Register
            </a>
        @endguest
        @auth
            <a href="/dashboard" class="bg-primary-500 rounded-xl text-white px-4 py-2 hover:bg-secondary-400">
                Dashboard
            </a>
        @endauth
    </div>
    <x-icon-menu class="w-8 text-secondary-900 lg:hidden" />
</div>