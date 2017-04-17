'use strict';
angular.module('portfolioApp')
    .controller('MenuController', ['$scope', function($scope) {
        $scope.tab = 1;
    }])

    .controller('FooterController', ['$scope', function($scope){
        $scope.currentYear = new Date();
    }])
;