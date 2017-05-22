@extends('layouts/auth')

@section('html_header_title')
    {{ trans('auth.register') }}
@endsection

@section('content')
<div class="register-box-body">
    <p class="login-box-msg">{{ trans('auth.register') }}</p>
    {{ Form::open(['route' => 'register', 'autocomplete' => 'off', 'role' => 'form']) }}

        <div class="form-group has-feedback{{ $errors->has('name') ? ' has-error' : '' }}">
        	{{ Form::text('name', null, ['class' => 'form-control', 'required', 'autofocus', 'autocomplete' => 'off']) }}
            <span class="glyphicon glyphicon-user form-control-feedback"></span>

            @if ($errors->has('name'))
                <span class="help-block">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif
        </div>

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
          <div class="checkbox">
            <label>
              {{ Form::checkbox('agree', 1, old('agree')) }} {!! trans('auth.form.register.agree', ['terms' => '/']) !!}
            </label>
          </div>
        </div>
                
       <div class="form-group">
                  {{ Form::button(trans('auth.form.register.registerNow'), ['class' => 'btn btn-primary btn-block btn-flat', 'type' => 'submit']) }}
        </div>
          
       <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
            Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
            Google+</a>
        </div>
    
        <a href="{{ route('login') }}" class="text-center">{{ trans('auth.form.register.signIn') }}</a>
    {{ Form::close() }}
</div>
@endsection
