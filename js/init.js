(function() {

/* ========================================================================== *\
    Execute immediately
\* ========================================================================== */

    // Add "js" class to <html>, to allow for CSS styles that should only apply to clients with JavaScript support.
    var html = document.getElementsByTagName('html')[0];
    var classes = html.className;
    if (classes.match(/(?:^|\s)js(?!\S)/) === null) {
        html.className = classes ? classes + ' js' : 'js';
    }


    // Add scripts that have to be in the <head> (i.e., before page begins to render)
    // var s = document.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'lib/conditionizr/conditionizr.js';
    // document.getElementsByTagName('head')[0].appendChild(s);


/* ========================================================================== *\
    Execute on page load
\* ========================================================================== */

    window.onload = function() {

        // RequireJS config
        require = {
            enforceDefine: false,
            paths: {
                // RequireJS loader plugins
                text: [
                    '/lib/require-text/text'
                ],
                css: [
                    '/lib/require-css/css'
                ],
                // Durandal modules
                durandal: [
                    '/lib/durandal'
                ],
                // CDN-hosted 3rd-party libs + local fallbacks
                jQuery: [
                    '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
                    '/lib/jquery/jquery'
                ],
                jQueryUi: [
                    '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min',
                    '/lib/jquery-ui/js/jquery-ui'
                ],
                knockout: [
                    '//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min',
                    '/lib/knockout/knockout'
                ],
                sammy: [
                    '//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min',
                    '/lib/sammy/sammy'
                ]
            },
            shim: {
                'jQueryUi': {
                    deps: ['jQuery'],
                    exports: 'jQuery.ui'
                }
            },
            deps: ['jQuery'],
            callback: function() {
                require(['jQuery', 'require'], function($) {
                    require(['app/main']);
                })
            }
        };


        // Load RequireJS
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'lib/require/require.js';
        document.getElementsByTagName('head')[0].appendChild(s);


        // Conditionizr config
        // conditionizr({
        //     debug      : false,
        //     scriptSrc  : 'js/',
        //     styleSrc   : 'css/',
        //     ieLessThan : { active: false, version: '9', scripts: false, styles: false, classes: false, customScript: false },
        //     safari     : { scripts: false, styles: false, classes:  true, customScript: false },
        //     chrome     : { scripts: false, styles: false, classes:  true, customScript: false },
        //     opera      : { scripts: false, styles: false, classes:  true, customScript: false },
        //     firefox    : { scripts: false, styles: false, classes:  true, customScript: false },
        //     ie10       : { scripts: false, styles: false, classes:  true, customScript: false },
        //     ie9        : { scripts: false, styles: false, classes:  true, customScript: false },
        //     ie8        : { scripts: false, styles: false, classes:  true, customScript: false },
        //     ie7        : { scripts: false, styles: false, classes:  true, customScript: false },
        //     ie6        : { scripts: false, styles: false, classes:  true, customScript: false },
        //     retina     : { scripts: false, styles: false, classes: false, customScript: false },
        //     touch      : { scripts: false, styles: false, classes: false, customScript: false },
        //     mac        : false,
        //     win        : false,
        //     x11        : false,
        //     linux      : false
        // });

    }


/* ========================================================================== *\
    Attach lazyFunction() to onload event
\* ========================================================================== */

    // var oldOnload = window.onload;
    // if (typeof window.onload != 'function') {
    //     window.onload = lazyFunction;
    // }
    // else {
    //     window.onload = function() {
    //         lazyFunction();
    //         if (oldOnload) {
    //             oldOnload();
    //         }
    //     }
    // }

})();