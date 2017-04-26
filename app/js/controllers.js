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
        $scope.message = true;
        
        projectsService.getRepositories()
            .then(
                function(response){
                    $scope.message = false;
                    $scope.projectsLists = response.data;
                    $scope.projectsLists = $scope.projectsLists.slice(0,6);
                    $scope.showProjects = true;
                },
                function(response) {
                    $scope.message = true;
                }
            );
        
        $scope.gotoRepo = function(link){
            window.open(link, "_blank");
        }
    }])

    .controller('AboutController', ['$scope', 'skillsService', function($scope, skillsService){
        $scope.skillsList = [];
        $scope.methodologieList = [];
        $scope.certificationList = [];
        
        skillsService.getSkills()
            .then(
                function(response){
                    var resp = response.data;
                    $scope.skillsList = resp.skills;
                    $scope.methodologieList = resp.methodologies;
                    $scope.certificationList = resp.certificates;
                }
            )
    }])
;