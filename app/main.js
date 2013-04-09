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