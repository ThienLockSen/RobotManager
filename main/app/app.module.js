'use strict';

angular.module('robot.manager', [
    'itesoft',
    'ngRoute',
    'ui.hand',
    'ngSanitize',
    'localStorage.services',
    'pascalprecht.translate',
    'ui.bootstrap.dropdown'
    ])

    .config(['ITLocalStorageProvider', '$rootScopeProvider',
        function(ITLocalStorageProvider, $rootScopeProvider){
            ITLocalStorageProvider.defaultKey='ROBOT_MANAGER';
        }])


    .config(['$translateProvider', '$translatePartialLoaderProvider', function ($translateProvider, $translatePartialLoaderProvider) {
        // Declare languages mapping
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'], {
            'en_US': 'en',
            'en_GB': 'en',
            'fr_FR': 'fr',
            'fr-CA': 'fr',
            'de-DE': 'de'
        }).determinePreferredLanguage();

        // Use partial loader
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
        });

        $translateProvider.useSanitizeValueStrategy();
    }])
    .run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);

