define(function(require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        system = require('durandal/system'),
        router = require('durandal/plugins/router');

    system.debug(true);

    app.start().then(function () {
        viewLocator.useConvention();
        router.useConvention();
        router.mapNav('home');
        app.adaptToDevice();
        app.setRoot('shell');
    });
});