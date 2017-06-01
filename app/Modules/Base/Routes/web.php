<?php

Route::group(['prefix' => 'base'], function()
{
    Route::get('/', 'BaseController@index');
});
