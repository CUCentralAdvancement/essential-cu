import $ from 'jquery';

$(document).ready(function() {
  $('.copy-wrapper .read-more a').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll');
    let target = $(this).attr('href');
    if ($(target).length) {
      $(target).addClass('active');
    }

  });

  $('.slide-out-container .btn-close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('no-scroll');
    $(this).parent().removeClass('active');
  });
});
