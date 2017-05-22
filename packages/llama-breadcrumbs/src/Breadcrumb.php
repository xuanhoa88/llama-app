<?php
namespace Llama\Breadcrumbs;

use Illuminate\Support\Facades\Route;

class Breadcrumb
{

    /**
     *
     * @var Generator
     */
    protected $generator;

    /**
     *
     * @var array
     */
    protected $callbacks = [];

    /**
     *
     * @param Generator $generator            
     */
    public function __construct(Generator $generator)
    {
        $this->generator = $generator;
    }

    /**
     *
     * @param string $name            
     * @param \Closure $callback            
     * @throws Exception
     */
    public function set($name, \Closure $callback)
    {
        if (isset($this->callbacks[$name])) {
            throw new Exception("Breadcrumb name \"{$name}\" has already been registered");
        }
        
        $this->callbacks[$name] = $callback;
    }

    /**
     *
     * @param string|null $name            
     * @return boolean
     */
    public function exists($name = null)
    {
        if (is_null($name)) {
            try {
                $name = Route::currentRouteName();
            } catch (Exception $e) {
                return false;
            }
        }
        return isset($this->callbacks[$name]);
    }

    /**
     *
     * @param string|null $name            
     * @return array
     */
    public function generate($name = null, array $params = [])
    {
        if (is_null($name)) {
            if ($currentRoute = Route::current()) {
                $name = $currentRoute->getName();
                if (is_null($name)) {
                    throw new Exception("The current route (" . head($$currentRoute->methods()) . ' /' . $currentRoute->uri() . ") is not named - please check routing configuration for an \"as\" parameter");
                }
                $params = array_values($currentRoute->parameters());
            }
        }
        
        return $this->generator->generate($this->callbacks, $name, $params);
    }

    /**
     *
     * @param string|null $name            
     * @return string
     */
    public function view($name = null, $view = null)
    {
        if (! is_string($view)) {
            $view = config('llama.breadcrumbs.view');
        }
        
        return view($view, [
            'breadcrumbs' => $this->generate($name, array_slice(func_get_args(), 1))
        ])->render();
    }
}
