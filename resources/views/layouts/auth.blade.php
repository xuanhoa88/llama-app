<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('partials/admin/head')
</head>
<body class="hold-transition login-page">
    <div id="app" v-cloak class="login-box">
    	<div class="login-logo">
          <a href="{{ url('/') }}"><b>Llama</b> Application</a>
        </div>
        <!-- /.logo -->
        <!-- Main content -->
        <section>
            <!-- Your Page Content Here -->
            @yield('content')
        </section>
    </div>
    
    @include('partials/admin/javascripts')
</body>
</html>