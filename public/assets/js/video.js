import $ from 'jquery';

$(document).ready(function() {
  $(".video-list li").each(function() {
    $(this).click(function(event) {
      event.preventDefault();
      let change = $(this).find("img").attr("src").split("/");
      $(".video-container > iframe").attr("src", "https://www.youtube.com/embed/" + change[4] + '?autoplay=1&controls=1&modestbranding=1&rel=0');
    });
  });
});
