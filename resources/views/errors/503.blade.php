@extends('layouts/error')

@section('html_header_title')
    {{ trans('message.serviceUnavailable') }}
@endsection

@section('content')

    <div class="error-page">
        <h2 class="headline text-red">503</h2>
        <div class="error-content">
            <h3><i class="fa fa-warning text-red"></i> Oops! {{ trans('message.somethingWrong') }}</h3>
            <p>
                {{ trans('message.mainWhile') }} <a href="{{ url('/') }}">{{ trans('message.returnDashboard') }}</a> {{ trans('message.usingSearch') }}
            </p>
            <form class="search-form">
                <div class="input-group">
                    <input type="text" name="search" class="form-control" placeholder="{{ trans('message.search') }}"/>
                    <div class="input-group-btn">
                        <button type="submit" name="submit" class="btn btn-danger btn-flat"><i class="fa fa-search"></i></button>
                    </div>
                </div><!-- /.input-group -->
            </form>
        </div>
    </div><!-- /.error-page -->
@endsection