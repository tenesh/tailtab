<div
        x-data="{ open: false, toggle() { this.open = ! this.open } }"
        class="flex items-center justify-between w-full max-w-[85rem] mx-auto text-secondary-900 p-4"
>
    <p class="text-3xl lg:text-4xl">{{ env('APP_NAME') }}</p>
    <x-icon-menu
            @click="toggle()"
            class="w-8 text-secondary-900 lg:hidden"
    />
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
    <div
            x-show="open"
            class="absolute top-0 left-0 w-full h-full py-3 bg-secondary-100 lg:hidden"
    >
        <div class="flex justify-between w-full text-secondary-900 p-4">
            <p class="text-3xl lg:text-4xl">{{ env('APP_NAME') }}</p>
            <x-heroicon-o-x-mark
                    @click="toggle()"
                    class="w-8 text-secondary-900 mt-0"
            />
        </div>
        <div class="flex flex-col items-center justify-center space-y-4 text-lg mt-10">
            <ul class="flex space-y-4">
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
    </div>
</div>