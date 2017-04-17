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
                        templateUrl : '../views/header.html'
                    },
                    'projects': {
                        templateUrl : '../views/home.html'
                        //controller : 'HomeController'
                    },
                    'about': {
                        templateUrl : '../views/home.html'
                        //controller : 'HomeController'
                    },
                    'contact': {
                        templateUrl : '../views/home.html'
                        //controller : 'HomeController'
                    },
                    'footer': {
                        templateUrl : '../views/footer.html',
                        controller: 'FooterController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');

            // use the HTML5 History API
            $locationProvider.hashPrefix('');
    })
;