const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    postCss: [
        require("autoprefixer"),
    ]
});

mix.setPublicPath("public");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            '@': __dirname + 'resources'
        }
    },
    output: {
        chunkFilename: "js/chunks/[name].js"
    }
}).react();

mix.sass('resources/sass/app.scss', 'public/css')
mix.js("resources/js/index.js", 'public/js/app.js').version();
mix.copy("resources/js/assets", "public/assets");
