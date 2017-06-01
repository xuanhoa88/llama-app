<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Fix error in Laravel 5.4: Specified key was too long error.
        \Schema::defaultStringLength(191);
        
        \Menu::macro('admin', function($menu) {
            // Admin
            $menu->group(['prefix' => url('/admin')], function($menu) {
                // Dashboard
                $menu->push('Dashboard', [
                    'class' => 'treeview'
                ])->prepend('<i class="fa fa-dashboard"></i><span>')->append('</span>');
                
                // User
                $menu->group(['prefix' => '/user'], function($menu) {
                    $menu->push('User', [
                        'class' => 'treeview'
                    ])->prepend('<i class="fa fa-user"></i><span>')->append('</span>');
                    $menu->user->push('All users', '/');
                    $menu->user->push('Create new', '/create');
                });
                
                // Permission
                $menu->group(['prefix' => '/permission'], function($menu) {
                    $menu->push('Permission', [
                        'class' => 'treeview'
                    ])->prepend('<i class="fa fa-key"></i><span>')->append('</span>');
                    $menu->permission->push('All permissions', '/');
                    $menu->permission->push('Create new', '/create');
                });
                
                // Role
                $menu->group(['prefix' => '/role'], function($menu) {
                    $menu->push('Role', [
                        'class' => 'treeview'
                    ])->prepend('<i class="fa fa-group"></i><span>')->append('</span>');
                    $menu->role->push('All roles', '/');
                    $menu->role->push('Create new', '/create');
                });
            });
            
        })->filter(function($item) {
            if ($item->hasChildren()) {
                $item->append('<i class="fa fa-angle-left pull-right"></i>');
            }
            return true;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
