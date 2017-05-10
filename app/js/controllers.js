'use strict';
angular.module('portfolioApp')
    
    .controller('HeaderController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
        var jq = $.noConflict();
        jq(".button-collapse").sideNav({
            closeOnClick: true,
            draggable: true
        });

        $scope.gotoSection = function(hashSection, offset){
            if ($location.hash() !== hashSection) {
                $location.hash(hashSection);
            } else {
                $anchorScroll();
            }
            setTimeout(function(){
                window.scroll({
                    left: window.pageXOffset, 
                    top: window.pageYOffset - offset,
                    behavior: 'smooth'});
            },50);
        }
    }])

    
    .controller('FooterController', ['$scope', function($scope){
        $scope.currentYear = new Date();
    }])

    .controller('ProjectsController', ['$scope', 'projectsService', function($scope, projectsService){
        $scope.projectsLists = {};
        $scope.showProjects = true;
        $scope.message = false;
        $scope.loading = true;
        
        projectsService.getRepositories()
            .then(
                function(response){
                    $scope.message = false;
                    $scope.loading = false;
                    $scope.projectsLists = response.data;
                    $scope.projectsLists = $scope.projectsLists.slice(0,6);
                    $scope.showProjects = true;
                },
                function(error) {
                    $scope.message = true;
                    $scope.loading = false;
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