<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        
        // Home
        \Breadcrumb::set('admin', function($breadcrumbs)
        {
            $breadcrumbs->push('Dashboard', url('/admin'));
        });
        
        // Home > User
        \Breadcrumb::set('home', function($breadcrumbs)
        {
            $breadcrumbs->parent('admin');
            $breadcrumbs->push('User', url('/admin/users'));
        });
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
}
