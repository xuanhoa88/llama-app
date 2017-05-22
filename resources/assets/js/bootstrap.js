/**
 * Added parts of es6 which are necessary for your project or your browser support requirements.
 */
import 'core-js/client/shim'; // Internet Explorer 9 support
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/weak-map';
import 'core-js/es6/weak-set';
import 'core-js/es6/typed';
import 'core-js/es6/reflect';
import 'core-js/es6/promise';

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
	/**
	 * FastClick is a simple, easy-to-use library for eliminating the 300ms delay 
	 * between a physical tap and the firing of a click event on mobile browsers. 
	 * The aim is to make your application feel less laggy and more responsive while 
	 * avoiding any interference with your current logic.
	 */
	window.FastClick = require('fastclick');
	
	/**
	 * JavaScript library for DOM operations
	 */
    window.jQuery = require('jquery');
    jQuery.noConflict(); // Relinquish jQuery's control of the $ variable.
    
    /**
     * We'll load jQuery and the Bootstrap jQuery plugin which provides support
     * for JavaScript based Bootstrap features such as modals and tabs. This
     * code may be modified to fit the specific needs of your application.
     */
    require('bootstrap-sass');
    
    /**
     * Small jQuery plugin that transforms any div into a scrollable area with a nice scrollbar.
     */
    require('jquery-slimscroll');
    
    /**
     * Bootstrap-select is a jQuery plugin that utilizes Bootstrap's dropdown.js to style and 
     * bring additional functionality to standard select elements.
     */
    require('bootstrap-select');
    
    /**
     * Nice, sleek and intuitive. A grid control especially designed for bootstrap.
     */
    require('jquery-bootgrid/dist/jquery.bootgrid');
    
    /**
     * Parse, validate, manipulate, and display dates
     */
    window.moment = require('moment');
    
    /**
     * Date Range Picker for Bootstrap
     */
    require('llama-bootstrap-daterangepicker');
    
    /**
     * Bootstrap form component to handle date and time data.
     */
    require('llama-bootstrap-datetimepicker');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/* Llama
*
* @type Object
* @description window.AdminLTE is the main object for the template's app.
*              It's used for implementing functions and options related
*              to the template. Keeping everything wrapped in an object
*              prevents conflict with other plugins and is a better
*              way to organize our code.
*/
window.Llama = window.Llama || {};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
