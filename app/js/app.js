'use strict';
angular.module('portfolioApp', ['ui.router', 'angular-input-stars', 'ngScrollSpy'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        //templateUrl : 'views/header.html',
                        templateUrl : './dist/views/header.html',
                        controller: 'HeaderController'
                    },
                    'home':{
                        //templateUrl : 'views/home.html'
                        templateUrl : './dist/views/home.html'
                        //controller : 'HomeController'
                    },
                    'projects': {
                        //templateUrl : 'views/projects.html',
                        templateUrl : './dist/views/projects.html',
                        controller : 'ProjectsController'
                    },
                    'about': {
                        //templateUrl : 'views/about.html',
                        templateUrl : './dist/views/about.html',
                        controller : 'AboutController'
                    },
                    'contact': {
                        //templateUrl : 'views/contact.html'
                        templateUrl : './dist/views/contact.html'
                        //controller : 'HomeController'
                    },
                    'footer': {
                        //templateUrl : 'views/footer.html',
                        templateUrl : './dist/views/footer.html',
                        controller: 'FooterController'
                    }
                }
            })
            
            .state('app.english',{
                url: 'en',
                views:{
                    'header@': {
                        //templateUrl : 'views/header-en.html',
                        templateUrl : './dist/views/header-en.html',
                        controller: 'HeaderController'
                    },
                    'home@':{
                        //templateUrl : 'views/home-en.html'
                        templateUrl : './dist/views/home-en.html'
                        //controller : 'HomeController'
                    },
                    'projects@': {
                        //templateUrl : 'views/projects-en.html',
                        templateUrl : './dist/views/projects-en.html',
                        controller : 'ProjectsController'
                    },
                    'about@': {
                        //templateUrl : 'views/about-en.html',
                        templateUrl : './dist/views/about-en.html',
                        controller : 'AboutController'
                    },
                    'contact@': {
                        //templateUrl : 'views/contact-en.html'
                        templateUrl : './dist/views/contact-en.html'
                        //controller : 'HomeController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');

            // use the HTML5 History API
            $locationProvider.hashPrefix('');
    })
;