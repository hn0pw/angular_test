
(function () {
    'use strict';

    angular.module('demoApp', [
        'ngRoute', 'pascalprecht.translate'
    ]).config(config).run(run);

    function config($routeProvider, $locationProvider, $translateProvider) {

        $locationProvider.hashPrefix(''); // prevent "/#!/login" instead of "/#/login"

        $translateProvider.useStaticFilesLoader({
            prefix: 'app/language/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');

        // wait until language file is loaded before render views
        var resolveTranslation = {
            translateReady: ['$translate', function ($translate) {
                    return $translate.onReady();
                }]
        };

        $routeProvider
                .when('/', {
                    templateUrl: 'app/views/main.html',
                    controller: 'MainController',
                    controllerAs: 'vm',
                    allowAnonymous: true,
                    resolve: resolveTranslation
                })
                .otherwise({redirectTo: '/'});

    }

    function run() {
        //
    }

})();

