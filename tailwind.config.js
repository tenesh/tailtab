import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#f5f3ff',
                    '100': '#ede9fe',
                    '200': '#ddd6fe',
                    '300': '#c4b5fd',
                    '400': '#a78bfa',
                    '500': '#8b5bf7',
                    '600': '#7c39ee',
                    '700': '#7635dc',
                    '800': '#5b20b7',
                    '900': '#4c1d95',
                    '950': '#2e1065',
                },
            },
        },
    },
    plugins: [forms],
};
