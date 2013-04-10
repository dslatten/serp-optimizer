// RequireJS config
require.config({
    baseUrl: '/',
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
    }
});


define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
function(app, viewLocator, system, router) {
    system.debug(true);
    app.start().then(function() {
        viewLocator.useConvention('app/viewmodels', 'app/views');
        router.useConvention('app/routes');
        router.mapNav('home');
        app.adaptToDevice();
        app.setRoot('app/viewmodels/shell');
    });
});