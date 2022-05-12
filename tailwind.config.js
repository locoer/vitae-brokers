const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans','Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gris: {
                  100: '#fcfdfd',
                  200: '#f8fafc',
                  300: '#eff3f6',
                  400: '#d4dce2',
                  500: '#97a8b4',
                  600: '#647782',
                  700: '#353f46',
                  800: '#13202a',
                  900: '#080d11 ',  
                  DEFAULT: '#97a8b4',
                },
                azul: {
                  50: '#fafdff',
                  100: '#ebf6fe',
                  300: '#cae6fc',
                  420: '#6698B4',
                  500: '#0C568D',
                  700: '#154870',
                  900: '#05253d',
                  DEFAULT: '#0C568D',
                },
                dorado: {
                  100: '#FFFAE5',
                  300: '#fff0c2',
                  500: '#FFC866',
                  700: '#d48908',
                  900: '#764e05',
                  DEFAULT: '#FFC866',
                },
                rojo: {
                  100: '#fff0f0',
                  300: '#ffc2c8',
                  500: '#FF5F7F',
                  700: '#ce0347',
                  900: '#9a0422', 
                  DEFAULT: '#FF5F7F',
                },
                aqua: {
                  500: '#06AEBB',
                  DEFAULT: '#06AEBB',
                }
            },
            backgroundImage: {
              'sombrillas': "linear-gradient(to top, var(--tw-gradient-stops)), url('/storage/sombrillas.jpg')"
            },
            spacing: {
              '78': '19rem',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
