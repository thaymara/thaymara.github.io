'use strict';
angular.module('portfolioApp')

    .controller('FooterController', ['$scope', function($scope){
        $scope.currentYear = new Date();
    }])
;