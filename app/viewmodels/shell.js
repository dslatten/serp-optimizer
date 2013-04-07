define(['durandal/plugins/router'],
function (router) {

    return {
        router: router,
        activate: function () {
            router.mapAuto();
            return router.activate('home');
        }
    };
});