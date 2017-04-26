'use strict';
angular.module('portfolioApp')

.service('projectsService', ['$http', function($http) {
    var repoURL = "https://api.github.com/users/thaymara/repos?sort=updated";

    this.getRepositories = function(){
        return $http.get(repoURL);
    }
}])

.service('skillsService', ['$http', function($http){
    var skillURL = "../data/skills.json";

    this.getSkills = function(){
        return $http.get(skillURL);
    }
}])
;