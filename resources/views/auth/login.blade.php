@extends('layouts/auth')

@section('html_header_title')
    {{ trans('auth.signIn') }}
@endsection

@section('content')
<div class="login-box-body">
    <p class="login-box-msg">{{ trans('auth.signIn') }}</p>
	
	{{ Form::open(['route' => 'login', 'autocomplete' => 'off', 'role' => 'form']) }}
	
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
		
		<div class="form-group">
        <div class="row">
            <div class="col-xs-8">
                <div class="checkbox">
                    <label>
                    	{{ Form::checkbox('remember', 1, old('remember')) }} {{ trans('auth.form.signIn.rememberMe') }}
                    </label>
                </div>
            </div>
            <div class="col-xs-4">
            	{{ Form::button(trans('auth.form.signIn.loginNow'), ['class' => 'btn btn-primary btn-block btn-flat', 'type' => 'submit']) }}
            </div>
        </div>
        </div>
        
        <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
            Facebook</a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
            Google+</a>
        </div>
        <!-- /.social-auth-links -->
    
        <a href="{{ route('password.request') }}">{{ trans('auth.form.signIn.forgotYourPassword') }}</a><br>
        <a href="{{ route('register') }}" class="text-center">{{ trans('auth.form.signIn.registerNewUser') }}</a>
    
      </div>
        
    {{ Form::close() }}
    
</div>
@endsection
