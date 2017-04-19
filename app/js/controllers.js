'use strict';
angular.module('portfolioApp')

    .controller('HeaderController', ['$scope', function($scope){
        var jq = $.noConflict();
        jq(".button-collapse").sideNav();
    }])

    
    .controller('FooterController', ['$scope', function($scope){
        $scope.currentYear = new Date();
    }])
;