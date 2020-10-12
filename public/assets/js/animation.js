import $ from 'jquery';

import ScrollMagic from "scrollmagic"
import 'gsap';
import 'debug.addIndicators';

$(document).ready(function() {

  let controller = new ScrollMagic.Controller();
  let sections = $('section');

  sections.each((i,e) => {
    let el = $(e);
    if (el.hasClass('section-1')) {
      // Section 1 scene
      let scene = new ScrollMagic.Scene({
        triggerElement: e.children[0],
        duration: '30%',
        triggerHook: 0.25
      }).setClassToggle(e, 'active').addTo(controller);
    } if(el.hasClass('section-5')) {
      let scene = new ScrollMagic.Scene({
        triggerElement: e.children[0],
        // duration: '100%',
        triggerHook: 0.4
      }).setClassToggle(e, 'active').addTo(controller);
    } if (el.hasClass('section-split')) {
      // Split section scene - only for large screens
      if ($(window).outerWidth() > 1023) {
        let scene = new ScrollMagic.Scene({
          triggerElement: e,
          duration: el.find('.section-right-inner').outerHeight(),
          triggerHook: 0.1
          // offset: 125
        }).setPin('.section-split .pinned-container', { pushFollowers: false })
          .setClassToggle(e, 'active').addTo(controller);
      } else {
        let scene = new ScrollMagic.Scene({
          triggerElement: e.children[0],
          duration: el.outerHeight(),
          triggerHook: 0.25
        }).setClassToggle(e, 'active').addTo(controller);
      }
    }


  });


});
