<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getlocale()) }}">
<head>
    <meta charest = "utf-8">
    <meta name = "viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token-->
    <meta name ="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config ('app.name', 'Vue Laravel SPA') }}</title>

    <!-- styles -->
    <!-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet"> -->
</head>
<body>
    <!-- <div id ="app">
        <example-component></example-component>
    </div> -->
    <div id ="app">
        <header-component></header-component>
        <router-view></router-view>
    </div>
    <!-- Scripts -->
    <!-- <script src="{{ mix('/js/app.js') }} " defer></script> -->
     @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</body>
</html>