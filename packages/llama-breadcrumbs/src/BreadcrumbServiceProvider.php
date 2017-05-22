<?php
namespace Llama\Breadcrumbs;

use Illuminate\Support\ServiceProvider;

class BreadcrumbServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;
    
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // Register the service provider.
        $this->app->singleton('breadcrumbs', function ($app) {
            $this->loadViewsFrom(realpath(__DIR__ . '/../views/'), 'breadcrumbs');
            return $this->app->make(Breadcrumb::class);
        });
    }
    
    /**
     * Booting the package.
     */
    public function boot()
    {
        $configPath= __DIR__ . '/../config/config.php';
        
        $this->mergeConfigFrom($configPath, 'llama.breadcrumbs');
        
        $this->publishes([
            $configPath => config_path('llama/breadcrumbs.php'),
        ], 'config');
    }
    
    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['breadcrumbs'];
    }
}
