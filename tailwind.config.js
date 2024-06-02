import defaultTheme from 'tailwindcss/defaultTheme';
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
                    '50': '#f8fce9',
                    '100': '#f0f8cf',
                    '200': '#e1f1a5',
                    '300': '#cae670',
                    '400': '#b2d744',
                    '500': '#9fca28',
                    '600': '#73961a',
                    '700': '#587318',
                    '800': '#475b19',
                    '900': '#3d4e19',
                    '950': '#1f2b08',
                },
                'secondary': {
                    '50': '#f4f6f7',
                    '100': '#e3e8ea',
                    '200': '#c9d2d8',
                    '300': '#a4b2bc',
                    '400': '#778b99',
                    '500': '#5c707e',
                    '600': '#4f5e6b',
                    '700': '#444f5a',
                    '800': '#3d454d',
                    '900': '#2f343a',
                    '950': '#21252b',
                },
            },
        },
    },

    plugins: [forms],
};
