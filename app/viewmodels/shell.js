define(function(require) {
    var router = require('durandal/plugins/router');

    return {
        router: router,
        activate: function () {
            router.mapAuto();
            return router.activate('home');
        }
    };
});