<?php
namespace App\Listeners;

use Illuminate\Auth\Events\Login;

class AuthLoginEvent
{
    /**
     * Create the event handler.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    /**
     * Handle the event.
     *
     * @param  ThingWasDone  $event
     * @return void
     */
    public function handle(Login $event)
    {
//         dd($event);
    }
}