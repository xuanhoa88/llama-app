@extends('layouts/auth')

@section('html_header_title')
    {{ trans('auth.changePassword') }}
@endsection

@section('content')
<div class="login-box-body">
    <p class="login-box-msg">{{ trans('auth.changePassword') }}</p>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif
	
	{{ Form::open(['route' => 'password.request', 'autocomplete' => 'off', 'role' => 'form']) }}
		{{ Form:hidden('token') }}

        <div class="form-group has-feedback{{ $errors->has('email') ? ' has-error' : '' }}">
            {{ Form::text('email', null, ['class' => 'form-control', 'required', 'autofocus', 'autocomplete' => 'off']) }}
			<span class="glyphicon glyphicon-envelope form-control-feedback"></span>
			
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group has-feedback{{ $errors->has('password') ? ' has-error' : '' }}">
           {{ Form::password('password', ['class' => 'form-control', 'required']) }}
			<span class="glyphicon glyphicon-lock form-control-feedback"></span>

            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group has-feedback">
        	{{ Form::password('password_confirmation', ['class' => 'form-control', 'required']) }}
			<span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>

        <div class="form-group">
                {{ Form::button(trans('auth.form.changePassword.changeNow'), ['class' => 'btn btn-primary btn-block btn-flat', 'type' => 'submit']) }}
        </div>
        
        <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
            Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
            Google+</a>
        </div>
                        
    {{ Form::close() }}
                    
</div>
@endsection
