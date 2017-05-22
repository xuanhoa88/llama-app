<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'failed' => 'These credentials do not match our records.',
    'throttle' => 'Too many login attempts. Please try again in :seconds seconds.',
    'signOut' => 'Sign out',
    'signIn' => 'Sign in to start your session',
    'changePassword' => 'Change password',
    'sendPasswordResetLink' => 'Send password reset link',
    'register' => 'Register new user',
    'form' => [
        'signIn' => [
            'email' => 'E-mail address',
            'password' => 'Password',
            'rememberMe' => 'Remember me?',
            'loginNow' => 'Login now',
            'registerNewUser' => 'Register new user',
            'forgotYourPassword' => 'Forgot your password?'
         ],
        'changePassword' => [
            'email' => 'E-mail address',
            'password' => 'Password',
            'confirmPassword' => 'Confirm password',
            'changeNow' => 'Change now'
        ],
        'sendPasswordResetLink' => [
            'email' => 'E-mail address',
            'sendNow' => 'Send now'
        ],
        'register' => [
            'name' => 'Name',
            'email' => 'E-mail address',
            'password' => 'Password',
            'confirmPassword' => 'Confirm password',
            'agree' => 'I agree to the <a href=":terms">terms</a>',
            'registerNow' => 'Register now',
            'signIn' => 'I already have a membership'
        ]
    ]

];
