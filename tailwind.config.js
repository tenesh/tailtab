const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
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
                            foreground: "#FFFFFF",
                            DEFAULT: "#8b5bf7",
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
                            foreground: "#FFFFFF",
                            DEFAULT: "#5c707e",
                        },
                    },
                }
            }
        })
    ],
};
