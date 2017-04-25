'use strict';
angular.module('portfolioApp')

    .controller('HeaderController', ['$scope', function($scope){
        var jq = $.noConflict();
        jq(".button-collapse").sideNav();
    }])

    
    .controller('FooterController', ['$scope', function($scope){
        $scope.currentYear = new Date();
    }])

    .controller('ProjectsController', ['$scope', 'projectsService', function($scope, projectsService){
        $scope.projectsLists = {};
        $scope.showProjects = true;
        $scope.message = "";
        
        projectsService.getRepositories()
            .then(
                function(response){
                    console.log(response.data);
                        $scope.projectsLists = response.data;
                        $scope.projectsLists = $scope.projectsLists.slice(0,6);
                        $scope.showProjects = true;
                    },
                    function(response) {
                        $scope.message = "Error: "+response.status + " " + response.statusText;
                    }
            );
        $scope.gotoRepo = function(link){
            window.open(link, "_blank");
        }
    }])
;