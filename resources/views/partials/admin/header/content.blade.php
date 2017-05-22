<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        @yield('content_header_title', 'Page Header here')
        
        @hasSection('content_header_description')
        	<small>@yield('content_header_description')</small>
        @endif
    </h1>
    
    @if (Breadcrumb::exists())
    	{!! Breadcrumb::view(null, 'partials/admin/breadcrumb') !!}
    @endif
</section>