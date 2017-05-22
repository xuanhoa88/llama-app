@if ($breadcrumbs)
	<ol class="breadcrumb">
		@foreach ($breadcrumbs as $breadcrumb)
			@if ($breadcrumb->url && !$breadcrumb->last)
				<li><a href="{{ $breadcrumb->url }}">{{ $breadcrumb->label }}</a></li>
			@else
				<li class="active">{{ $breadcrumb->label }}</li>
			@endif
		@endforeach
	</ol>
@endif
