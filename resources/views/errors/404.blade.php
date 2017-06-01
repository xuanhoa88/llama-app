@extends('layouts/error')

@section('html_header_title')
    {{ trans('error.pageNotFound') }}
@endsection

@section('content')

    <div class="error-page">
        <h2 class="headline text-yellow">404</h2>
        <div class="error-content">
            <h3><i class="fa fa-warning text-yellow"></i> {{ trans('error.pageNotFound') }}.</h3>
            <p>
                {!! trans('error.notFindPage', ['url' => url('/')]) !!}
            </p>
            {!! Form::open(['class' => 'search-form']) !!}
                <div class="input-group">
                	{!! Form::text('search', null, ['class' => 'form-control', 'placeholder' => trans('error.search')]) !!}
                    <div class="input-group-btn">
                    	{!! Form::button('<i class="fa fa-search"></i>', ['class' => 'btn btn-warning btn-flat', 'type' => 'submit']) !!}
                    </div>
                </div><!-- /.input-group -->
            {!! Form::close() !!}
        </div><!-- /.error-content -->
    </div><!-- /.error-page -->
@endsection