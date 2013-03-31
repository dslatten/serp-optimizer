define(['durandal/plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            router.map([
                { url: 'home', moduleId: 'views/home', name:'You are home.', visible: true }
            ]);

            return router.activate('home');
        }
    };
});