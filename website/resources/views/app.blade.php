<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'NMS') }}</title>
        <link
				href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700"
				rel="stylesheet"
			/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        {{-- <link rel="stylesheet" href="{{ asset('css/home.css') }}"> --}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        
        @routes

        <script src="{{ mix('js/app.js') }}" defer></script>
        <script src="{{ asset('js/home.js') }}" defer></script>
        
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        @env ('local')
            <script src="http://localhost:8080/js/bundle.js"></script>
        @endenv
    </body>
</html>
