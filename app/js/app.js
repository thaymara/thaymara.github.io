'use strict';
//angular.module('portfolioApp', [])
angular.module('portfolioApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : './dist/views/header.html'
                    },
                    'projects': {
                        templateUrl : './dist/views/home.html'
                        //controller : 'HomeController'
                    },
                    'about': {
                        templateUrl : './dist/views/home.html'
                        //controller : 'HomeController'
                    },
                    'contact': {
                        templateUrl : './dist/views/home.html'
                        //controller : 'HomeController'
                    },
                    'footer': {
                        templateUrl : './dist/views/footer.html',
                        controller: 'FooterController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');

            // use the HTML5 History API
            $locationProvider.hashPrefix('');
    })
;