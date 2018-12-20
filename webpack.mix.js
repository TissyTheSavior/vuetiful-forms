let mix = require('laravel-mix');

mix.js('src/vuetiful-forms.js', 'dist/lib');

mix.js('app/app.js', 'app/built.js');