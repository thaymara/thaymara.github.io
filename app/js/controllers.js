'use strict';
angular.module('portfolioApp')
    .run(['$anchorScroll', function($anchorScroll) {
       // $anchorScroll.yOffset = 100;   // always scroll by 50 extra pixels
    }])
    
    .controller('HeaderController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
        var jq = $.noConflict();
        jq(".button-collapse").sideNav({
            closeOnClick: true,
            draggable: true
        });
        //jq(".button-collapse").s

        $scope.gotoSection = function(hashSection){
           // $anchorScroll.yOffset = 70; 
            if ($location.hash() !== hashSection) {
                $location.hash(hashSection);
            } else {
                $anchorScroll.yOffset = 100;
                $anchorScroll();
            }
           // $location.hash(hashSection);
            console.log($anchorScroll.yOffset);
        }
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