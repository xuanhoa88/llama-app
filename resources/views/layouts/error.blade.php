<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('partials/admin/head')
<body>
    <div id="app" v-cloak>
        <!-- Main content -->
        <section class="content">
            <!-- Your Page Content Here -->
            @yield('content')
        </section>
    </div>
</body>
</html>