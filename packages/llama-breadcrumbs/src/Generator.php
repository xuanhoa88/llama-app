<?php
namespace Llama\Breadcrumbs;

class Generator
{

    /**
     * @var array
     */
    protected $breadcrumbs = [];

    /**
     * @var array
     */
    protected $callbacks = [];

    /**
     *
     * @param array $callbacks            
     * @param string $name            
     * @param array $params            
     * @return array
     */
    public function generate(array $callbacks, $name, array $params)
    {
        $this->breadcrumbs = [];
        $this->callbacks = $callbacks;
        
        $this->invoke($name, $params);
        
        // Add first & last indicators
        if ($this->breadcrumbs) {
            $this->breadcrumbs[0]->first = true;
            $this->breadcrumbs[count($this->breadcrumbs) - 1]->last = true;
        }
        
        return $this->breadcrumbs;
    }

    /**
     *
     * @param string $label            
     * @param string $url            
     * @param array $data            
     * @return Generator
     */
    public function push($label, $url = null, array $data = [])
    {
        $this->breadcrumbs[] = (object) array_merge($data, [
            'label' => $label,
            'url' => $url,
            'first' => false,
            'last' => false
        ]);
        
        return $this;
    }
    
    /**
     * @param string $name
     */
    public function parent($name)
    {
        $this->invoke($name, array_slice(func_get_args(), 1));
    }

    /**
     *
     * @param string $name            
     * @param array $params            
     * @throws Exception
     */
    protected function invoke($name, array $params)
    {
        if (! isset($this->callbacks[$name])) {
            throw new Exception("Breadcrumb not found with name \"{$name}\"");
        }
        
        array_unshift($params, $this);
        
        call_user_func_array($this->callbacks[$name], $params);
    }
}
