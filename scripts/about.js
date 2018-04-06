var skillsURL = '../../data/skills.json';

var habilitiesHTML = document.querySelector(".about__habilities-content");

// variables to fade image and icons
var image = document.querySelector(".about__profile-img");
var icon = document.querySelector(".about__habilities-content");
var imageTop, iconTop;
var hasScrolled = false;

getSkills();

/**
 * Listener to add a scroll event to control the fade in image and icons
 * @param {*} element
 */

document.addEventListener("scroll", function() {
  'use strict';

  imageTop = image.getBoundingClientRect();
  iconTop = icon.getBoundingClientRect();

  image.classList.add("profile--out");
  if (imageTop.top < 300) {
    image.classList.add("profile--in");
    hasScrolled = true;
  } else {
    image.classList.remove("profile--in");
  }

  icon.classList.add("habilities--out");
  if(iconTop.top < 450) {
    icon.classList.add("habilities--in");
  } else {
    icon.classList.remove("habilities--in");
  }
});

/**
 * Function to get all skill from json file
 * @param {*} element
 */
function getSkills() {
  'use strict';

  var skillRequest = new XMLHttpRequest();
  skillRequest.open('GET', skillsURL);
  skillRequest.responseType = 'json';
  skillRequest.send();

  skillRequest.onload = function() {
    populateSkills(skillRequest.response.data);
  };
}

/**
 * Function to get populate the HTML with the skills
 * @param {skills} Object
 */
var populateSkills = function(skills) {
  'use strict';

  var skillsHTML = "";

  for(var i=0; i<skills.length; i++) {
    skillsHTML += '<div class="col s12 m4 l4 center fade-icon">';
      skillsHTML += '<i class="material-icons icon">' + skills[i].icon + '</i>';
      skillsHTML += '<h5>' + skills[i].title + '</h5>';
      skillsHTML += '<p>' + skills[i].habilites + '</p>';
    skillsHTML += '</div>';
  }

  habilitiesHTML.innerHTML = skillsHTML;
};
