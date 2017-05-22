<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('partials/admin/head')
</head>
<body class="skin-blue sidebar-mini">
    <div id="app" class="wrapper" v-cloak>
        @include('partials/admin/header/navbar')
		
		@include('partials/admin/sidebar/main')
		
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
    
            @include('partials/admin/header/content')
    
            <!-- Main content -->
            <section class="content">
                <!-- Your Page Content Here -->
                @yield('content')
            </section><!-- /.content -->
        </div><!-- /.content-wrapper -->
    
        @include('partials/admin/sidebar/control')
    
        @include('partials/admin/footer')
    </div>

    @include('partials/admin/javascripts')
</body>
</html>
