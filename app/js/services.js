'use strict';
angular.module('portfolioApp')

.service('projectsService', ['$http', function($http) {
    var repoURL = "https://api.github.com/users/thaymara/repos?sort=updated";

    this.getRepositories = function(){
        return $http.get(repoURL);
    }
}])
;