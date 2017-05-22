'use strict';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

/*
 * Main JS application file. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive plugins.
 */
jQuery(function($, undefined) {
    Llama.Admin = $.extend({}, Llama.Admin);
    
    var $body = function() {
    		return $('body');
    	},
    	$initSlimScroll = !($.fn.slimScroll === undefined);

    /* 
     * Modify these options to suit your implementation
     */
    Llama.Admin.options = {
        // Add slimscroll to navbar menus
        // This requires you to load the slimscroll plugin
        // in every page before app.js
        navbarMenuSlimscroll: true,
        navbarMenuSlimscrollWidth: '3px', //The width of the scroll bar
        navbarMenuHeight: '200px', //The height of the inner menu
        // General animation speed for JS animated elements such as box collapse/expand and
        // sidebar treeview slide up/down. This options accepts an integer as milliseconds,
        // 'fast', 'normal', or 'slow'
        animationSpeed: 500,
        // Sidebar push menu toggle button selector
        sidebarToggleSelector: '[data-toggle=offcanvas]',
        // Activate sidebar push menu
        sidebarPushMenu: true,
        // Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
        sidebarSlimScroll: true,
        // Enable sidebar expand on hover effect for sidebar mini
        // This option is forced to true if both the fixed layout and sidebar mini
        // are used together
        sidebarExpandOnHover: false,
        // BoxRefresh Plugin
        enableBoxRefresh: true,
        // Bootstrap.js tooltip
        enableBSToppltip: true,
        BSTooltipSelector: '[data-toggle=tooltip]',
        // Enable Fast Click. Fastclick.js creates a more
        // native touch experience with touch devices. If you
        // choose to enable the plugin, make sure you load the script
        // before Llama.Admin's app.js
        enableFastclick: false,
        // Control Sidebar Tree views
        enableControlTreeView: true,
        // Control Sidebar Options
        enableControlSidebar: true,
        controlSidebarOptions: {
            // Which button should trigger the open/close event
            toggleBtnSelector: '[data-toggle=control-sidebar]',
            // The sidebar selector
            selector: '.control-sidebar',
            // Enable slide over content
            slide: true
        },
        // Box Widget Plugin. Enable this plugin
        // to allow boxes to be collapsed and/or removed
        enableBoxWidget: true,
        // Box Widget plugin options
        boxWidgetOptions: {
            boxWidgetIcons: {
                // Collapse icon
                collapse: 'fa-minus',
                // Open icon
                open: 'fa-plus',
                // Remove icon
                remove: 'fa-times'
            },
            boxWidgetSelectors: {
                // Remove button selector
                remove: '[data-widget=remove]',
                // Collapse button selector
                collapse: '[data-widget=collapse]'
            }
        },
        // Direct Chat plugin options
        directChat: {
            // Enable direct chat by default
            enable: true,
            // The button to open and close the chat contacts pane
            contactToggleSelector: '[data-widget=chat-pane-toggle]'
        },
        // The standard screen sizes that bootstrap uses.
        // If you change these in the variables.less file, change
        // them here too.
        screenSizes: {
            xs: 480,
            sm: 768,
            md: 992,
            lg: 1200
        }
    };

    // Fix for IE page transitions
    $body().removeClass('hold-transition');

    // Extend options if external options exist
    Llama.Admin.options = $.extend(Llama.Admin.options, Llama.AdminOptions);
    
    /* 
     * Fixes the layout height in case min-height fails.
     *
     * @type Object
     * @usage Llama.Admin.layout.activate()
     *        Llama.Admin.layout.fix()
     *        Llama.Admin.layout.fixSidebar()
     */
    Llama.Admin.layout = {
        activate: function() {
            var _this = this;
            _this.fix();
            _this.fixSidebar();
            $('body, html, .wrapper').css('height', 'auto');
            $(window, '.wrapper').resize(function() {
                _this.fix();
                _this.fixSidebar();
            });
        },
        fix: function() {
            // Remove overflow from .wrapper if layout-boxed exists
            $('.layout-boxed > .wrapper').css('overflow', 'hidden');
            // Get window height and the wrapper height
            var footer_height = $('.main-footer').outerHeight() || 0;
            var neg = $('.main-header').outerHeight() + footer_height;
            var window_height = $(window).height();
            var sidebar_height = $('.sidebar').height() || 0;
            // Set the min-height of the content and sidebar based on the
            // the height of the document.
            if ($body().hasClass('fixed')) {
                $('.content-wrapper, .right-side').css('min-height', window_height - footer_height);
            } else {
                var postSetWidth;
                if (window_height >= sidebar_height) {
                    $('.content-wrapper, .right-side').css('min-height', window_height - neg);
                    postSetWidth = window_height - neg;
                } else {
                    $('.content-wrapper, .right-side').css('min-height', sidebar_height);
                    postSetWidth = sidebar_height;
                }

                // Fix for the control sidebar height
                var controlSidebar = $(Llama.Admin.options.controlSidebarOptions.selector);
                if (!(controlSidebar === undefined)) {
                    if (controlSidebar.height() > postSetWidth) {
                        $('.content-wrapper, .right-side').css('min-height', controlSidebar.height());
                    }
                }

            }
        },
        fixSidebar: function() {
            // Make sure the body tag has the .fixed class
            if (!$body().hasClass('fixed')) {
                if ($initSlimScroll) {
                    $('.sidebar').slimScroll({
                        destroy: true
                    }).height('auto');
                }
                return;
            }
            
            if (!$initSlimScroll && window.console) {
                window.console.error('Error: the fixed layout requires the slimscroll plugin!');
            }
            
            // Enable slimscroll for fixed layout
            if (Llama.Admin.options.sidebarSlimScroll) {
                if ($initSlimScroll) {
                    // Destroy if it exists
                    $('.sidebar').slimScroll({
                        destroy: true
                    }).height('auto');
                    // Add slimscroll
                    $('.sidebar').slimScroll({
                        height: ($(window).height() - $('.main-header').height()) + 'px',
                        color: 'rgba(0,0,0,0.2)',
                        size: '3px'
                    });
                }
            }
        }
    };

    /* 
     * Adds the push menu functionality to the sidebar.
     *
     * @type Function
     * @usage: Llama.Admin.pushMenu('[data-toggle=offcanvas]')
     */
    Llama.Admin.pushMenu = {
        activate: function(toggleBtn) {
            // Get the screen sizes
            var screenSizes = Llama.Admin.options.screenSizes;

            // Enable sidebar toggle
            $(document).on('click', toggleBtn, function(e) {
                e.preventDefault();

                // Enable sidebar push menu
                if ($(window).width() > (screenSizes.sm - 1)) {
                    if ($body().hasClass('sidebar-collapse')) {
                        $body().removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                    } else {
                        $body().addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    }
                }
                // Handle sidebar push menu for small screens
                else {
                    if ($body().hasClass('sidebar-open')) {
                        $body().removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    } else {
                        $body().addClass('sidebar-open').trigger('expanded.pushMenu');
                    }
                }
            });

            $('.content-wrapper').click(function() {
                // Enable hide menu when clicking on the content-wrapper on small screens
                if ($(window).width() <= (screenSizes.sm - 1) && $body().hasClass('sidebar-open')) {
                    $body().removeClass('sidebar-open');
                }
            });

            // Enable expand on hover for sidebar mini
            if (Llama.Admin.options.sidebarExpandOnHover ||
                ($body().hasClass('fixed') && $body().hasClass('sidebar-mini'))) {
                this.expandOnHover();
            }
        },
        expandOnHover: function() {
            var _this = this;
            var screenWidth = Llama.Admin.options.screenSizes.sm - 1;
            // Expand sidebar on hover
            $('.main-sidebar').hover(function() {
                if ($body().hasClass('sidebar-mini') && $body().hasClass('sidebar-collapse') && $(window).width() > screenWidth) {
                    _this.expand();
                }
            }, function() {
                if ($body().hasClass('sidebar-mini') && $body().hasClass('sidebar-expanded-on-hover') && $(window).width() > screenWidth) {
                    _this.collapse();
                }
            });
        },
        expand: function() {
            $body().removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
        },
        collapse: function() {
            if ($body().hasClass('sidebar-expanded-on-hover')) {
                $body().removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
            }
        }
    };

    /* 
     * Converts the sidebar into a multilevel
     * tree view menu.
     *
     * @type Function
     * @Usage: Llama.Admin.tree('.sidebar')
     */
    Llama.Admin.tree = function(menu) {
        var _this = this;
        var animationSpeed = Llama.Admin.options.animationSpeed;
        $(document).off('click', menu + ' li a').on('click', menu + ' li a', function(e) {
                // Get the clicked link and the next element
                var $this = $(this);
                var checkElement = $this.next();

                // Check if the next element is a menu and is visible
                if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$body().hasClass('sidebar-collapse'))) {
                    // Close the menu
                    checkElement.slideUp(animationSpeed, function() {
                        checkElement.removeClass('menu-open');
                    });
                    checkElement.parent('li').removeClass('active');
                }
                // If the menu is not visible
                else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                    // Get the parent menu
                    var parent = $this.parents('ul').first();
                    // Close all open menus within the parent
                    // Remove the menu-open class from the parent
                    parent.find('ul:visible').slideUp(animationSpeed).removeClass('menu-open');

                    // Open the target menu and add the menu-open class
                    checkElement.slideDown(animationSpeed, function() {
                        // Add the class active to the parent li
                        checkElement.addClass('menu-open');
                        parent.find('li.active').removeClass('active');
                        $this.parent('li').addClass('active');
                        
                        // Fix the layout in case the sidebar stretches over the height of the window
                        _this.layout.fix();
                    });
                }
                // If this isn't a link, prevent the page from being redirected
                if (checkElement.is('.treeview-menu')) {
                    e.preventDefault();
                }
            });
    };

    /* 
     * Adds functionality to the right sidebar
     *
     * @type Object
     * @usage Llama.Admin.controlSidebar.activate(options)
     */
    Llama.Admin.controlSidebar = {
        // Instantiate the object
        activate: function() {
            // Get the object
            var _this = this;
            // Get the sidebar
            var sidebar = $(Llama.Admin.options.controlSidebarOptions.selector);
            // The toggle button
            var btn = $(Llama.Admin.options.controlSidebarOptions.toggleBtnSelector);

            // Listen to the click event
            btn.on('click', function(e) {
                e.preventDefault();
                
                // If the sidebar is not open
                if (!sidebar.hasClass('control-sidebar-open') && !$body().hasClass('control-sidebar-open')) {
                    // Open the sidebar
                    _this.open(sidebar, Llama.Admin.options.controlSidebarOptions.slide);
                } else {
                    _this.close(sidebar, Llama.Admin.options.controlSidebarOptions.slide);
                }
            });

            // If the body has a boxed layout, fix the sidebar bg position
            _this._fix($('.control-sidebar-bg'));

            // If the body has a fixed layout, make the control sidebar fixed
            if ($body().hasClass('fixed')) {
                _this._fixForFixed(sidebar);
            } else {
                // If the content height is less than the sidebar's height, force max height
                if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
                    _this._fixForContent(sidebar);
                }
            }
        },
        // Open the control sidebar
        open: function(sidebar, slide) {
            // Slide over content
            if (slide) {
                sidebar.addClass('control-sidebar-open');
            } else {
                // Push the content by adding the open class to the body instead
                // of the sidebar itself
                $body().addClass('control-sidebar-open');
            }
        },
        // Close the control sidebar
        close: function(sidebar, slide) {
            if (slide) {
                sidebar.removeClass('control-sidebar-open');
            } else {
                $body().removeClass('control-sidebar-open');
            }
        },
        _fix: function(sidebar) {
            var _this = this;
            if ($body().hasClass('layout-boxed')) {
                sidebar.css('position', 'absolute');
                sidebar.height($('.wrapper').height());
                if (_this.hasBindedResize) {
                    return;
                }
                $(window).resize(function() {
                    _this._fix(sidebar);
                });
                _this.hasBindedResize = true;
            } else {
                sidebar.css({
                    'position': 'fixed',
                    'height': 'auto'
                });
            }
        },
        _fixForFixed: function(sidebar) {
            sidebar.css({
                'position': 'fixed',
                'max-height': '100%',
                'overflow': 'auto',
                'padding-bottom': '50px'
            });
        },
        _fixForContent: function(sidebar) {
            $('.content-wrapper, .right-side').css('min-height', sidebar.height());
        }
    };

    /* 
     * BoxWidget is a plugin to handle collapsing and
     * removing boxes from the screen.
     *
     * @type Object
     * @usage Llama.Admin.boxWidget.activate()
     *        Set all your options in the main Llama.Admin.options object
     */
    Llama.Admin.boxWidget = {
        selectors: Llama.Admin.options.boxWidgetOptions.boxWidgetSelectors,
        icons: Llama.Admin.options.boxWidgetOptions.boxWidgetIcons,
        animationSpeed: Llama.Admin.options.animationSpeed,
        activate: function(_box) {
            var _this = this;
            if (!_box) {
                _box = document; // activate all boxes per default
            }
            // Listen for collapse event triggers
            $(_box).on('click', _this.selectors.collapse, function(e) {
                e.preventDefault();
                _this.collapse($(this));
            });

            // Listen for remove event triggers
            $(_box).on('click', _this.selectors.remove, function(e) {
                e.preventDefault();
                _this.remove($(this));
            });
        },
        collapse: function(element) {
            // Find the box parent
            var box = element.parents('.box').first();
            // Find the body and the footer
            var box_content = box.find('> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer');
            if (!box.hasClass('collapsed-box')) {
                // Convert minus into plus
                element.children(':first').removeClass(this.icons.collapse).addClass(this.icons.open);
                // Hide the content
                box_content.slideUp(this.animationSpeed, function() {
                    box.addClass('collapsed-box');
                });
            } else {
                // Convert plus into minus
                element.children(':first').removeClass(this.icons.open).addClass(this.icons.collapse);
                // Show the content
                box_content.slideDown(this.animationSpeed, function() {
                    box.removeClass('collapsed-box');
                });
            }
        },
        remove: function(element) {
            // Find the box parent
            element.parents('.box').first().slideUp(this.animationSpeed);
        }
    }
    
    /*
     * This is a custom plugin to use with the component BOX. It allows you to add
     * a refresh button to the box. It converts the box's state to a loading state.
     *
     * @type plugin
     * @usage $('#box-widget').boxRefresh( options );
     */
    $.fn.boxRefresh = function(options) {
        // Render options
        var settings = $.extend({
            //Refresh button selector
            trigger: '.refresh-btn',
            //File source to be loaded (e.g: ajax/src.php)
            source: '',
            //Callbacks
            onLoadStart: function(box) {
                return box;
            }, //Right after the button has been clicked
            onLoadDone: function(box) {
                return box;
            } //When the source has been loaded

        }, options);

        // The overlay
        var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

        return this.each(function() {
            // If a source is specified
            if (settings.source === '') {
                if (window.console) {
                    window.console.log('Please specify a source first - boxRefresh()');
                }
                return;
            }
            
            // The box
            var box = $(this);

            // On trigger click
            box.find(settings.trigger).first().on('click', function(e) {
                e.preventDefault();
                // Add loading overlay
                start(box);

                // Perform ajax call
                box.find('.box-body').load(settings.source, function() {
                    done(box);
                });
            });
        });

        function start(box) {
            // Add overlay and loading img
            box.append(overlay);
            settings.onLoadStart.call(box);
        }

        function done(box) {
            // Remove overlay and loading img
            box.find(overlay).remove();
            settings.onLoadDone.call(box);
        }

    };

    /* 
     * This is a custom plugin to use with the component BOX. It allows you to activate
     * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
     *
     * @type plugin
     * @usage $('#box-widget').activateBox();
     * @usage $('#box-widget').toggleBox();
     * @usage $('#box-widget').removeBox();
     */
    $.fn.activateBox = function() {
        Llama.Admin.boxWidget.activate(this);
    };

    $.fn.toggleBox = function() {
        Llama.Admin.boxWidget.collapse($(Llama.Admin.boxWidget.selectors.collapse, this));
    };

    $.fn.removeBox = function() {
        Llama.Admin.boxWidget.remove($(Llama.Admin.boxWidget.selectors.remove, this));
    };

    // Activate the layout maker
    Llama.Admin.layout.activate();

    // Enable sidebar tree view controls
    if (Llama.Admin.options.enableControlTreeView) {
        Llama.Admin.tree('.sidebar');
    }

    // Enable control sidebar
    if (Llama.Admin.options.enableControlSidebar) {
        Llama.Admin.controlSidebar.activate();
    }

    // Add slimscroll to navbar dropdown
    if (Llama.Admin.options.navbarMenuSlimscroll && $initSlimScroll) {
        $('.navbar .menu').slimScroll({
            height: Llama.Admin.options.navbarMenuHeight,
            alwaysVisible: false,
            size: Llama.Admin.options.navbarMenuSlimscrollWidth
        }).css('width', '100%');
    }

    // Activate sidebar push menu
    if (Llama.Admin.options.sidebarPushMenu) {
        Llama.Admin.pushMenu.activate(Llama.Admin.options.sidebarToggleSelector);
    }

    // Activate Bootstrap tooltip
    if (Llama.Admin.options.enableBSToppltip) {
        $body().tooltip({
            selector: Llama.Admin.options.BSTooltipSelector,
            container: 'body'
        });
    }

    // Activate box widget
    if (Llama.Admin.options.enableBoxWidget) {
        Llama.Admin.boxWidget.activate();
    }

    // Activate fast click
    FastClick.attach(document.body);

    // Activate direct chat widget
    if (Llama.Admin.options.directChat.enable) {
        $(document).on('click', Llama.Admin.options.directChat.contactToggleSelector, function() {
            var box = $(this).parents('.direct-chat').first();
            box.toggleClass('direct-chat-contacts-open');
        });
    }
});

// new Vue({
//     el: '#app'
// });
