import $ from 'jquery';

$(document).ready(function() {

  $("#main-menu-trigger").click(function(e) {
    e.preventDefault();
    $(".header-inner > nav").toggleClass("nav-active");
  });

});
