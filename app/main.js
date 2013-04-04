require.config({
    enforceDefine: true,
    paths: {
        text: [
            'durandal/amd/text'
        ],
        jquery: [
            '//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min',
            '/lib/jquery/jquery'
        ],
        jqueryUI: [
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
        'jqueryUI': {
            deps: ['jquery'],
            exports: 'jQuery.ui'
        }
    }
});

define(['jquery'],
    function($) {
        require(['knockout', 'jqueryUI'],
            function(ko) {
                require(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
                    function(app, viewLocator, system, router) {
                        system.debug(true);
                        app.start().then(function() {
                            viewLocator.useConvention();
                            router.useConvention();
                            router.mapNav('home');
                            app.adaptToDevice();
                            app.setRoot('viewmodels/shell');
                        });
                    }
                );                
            }
        );
    }
);
