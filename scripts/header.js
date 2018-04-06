/* jshint ignore:start */

var headerButton = document.querySelector(".js-btn-view-more");

headerButton.addEventListener("click", function(){
  jQuery('html, body').stop().animate({
    scrollTop: jQuery("#about").offset().top //set offset to scroll
  }, 1000);
})

/* jshint ignore:end */
