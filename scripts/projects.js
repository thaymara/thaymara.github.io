var requestURL = 'https://api.github.com/users/thaymara/repos?sort=updated&type=owner';

var projectsHTML = document.querySelector(".js-project-list");
var showProjects = document.querySelector(".js-show-projects");
var projectsError = document.querySelector(".js-project-error");

getProjects();

/**
 * Function to get all projects from github
 * @param {*} element
 */
function getProjects() {
  'use strict';
  var request = new XMLHttpRequest();

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {

    if (request.status === 200 ) {
      populateProjects(request.response);
      projectsError.classList.add("hide");
    } else {
      showProjects.classList.add("hide");
    }
  };

  request.onerror = function() {
    showProjects.classList.add("hide");
    projectsError.classList.add("show");
  };
}

/**
 * Function to populate index HTML with the projects
 * @param {projectObj} Object
 */
var populateProjects = function(projectObj) {
  'use strict';
  var projectHTML = "";

  for (var i=0; i<6; i++) {
    var projDesc = projectObj[i].description !== null ? projectObj[i].description : '';

    projectHTML += '<div class="col s12 m4">';
    projectHTML += '<div class="card small hoverable">';
      projectHTML += '<div class="card-image">';
        projectHTML += '<i class="icon__project icon-' + getCoverImage(projectObj[i].name) + '" aria-hidden="true"></i>';
        //projectHTML += '<img src="' + getCoverImage(projectObj[i].name) + '" title="Imagem" alt="projeto imagem" />';
      projectHTML += '</div>';

      projectHTML += '<div class="card-content">';
        projectHTML += '<span class="card-title">' + projectObj[i].name + '</span>';
        projectHTML += '<p>' + projDesc + '</p>';
      projectHTML += '</div>';
      projectHTML += '<div class="card-action">';
        projectHTML += '<a href="' + projectObj[i].html_url + '" target="_blank">';
        projectHTML += '<i class="material-icons right">insert_link</i>CODE</a>';
      projectHTML += '</div>';
    projectHTML += '</div>';
    projectHTML += '</div>';
  }

  projectsHTML.innerHTML = projectHTML;
};

/**
 * Function to get the icon to show on project card
 * @param {*} element
 */
var getCoverImage = function(project) {
  'use strict';

  var language = project.split("-");
  var image = "";

  switch (language[0]) {
    case "android":
      image = 'android';
      break;

    case "angular":
      image = 'angular';
      break;

    case "angularjs":
      image = 'angular';
      break;

    case "javascript":
      image = 'javascript';
      break;

    case "ionic":
      image = 'phone_android';
      break;

    case "react":
      image = 'tablet_react';
      break;

    default:
      image = 'code';
      break;
  }

  return image;
};
