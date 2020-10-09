import $ from 'jquery';

import ScrollMagic from "scrollmagic"
import 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';

$(document).ready(function() {

  const controller = new ScrollMagic.Controller();
  const slideshowContainer = $('.slideshow');
  const fullPageSections = $("section.overlay");
  let sceneDuration = slideshowContainer.outerHeight();

  for (let i = 0; i < fullPageSections.length; i++) {

    // scene for pinned sections
    new ScrollMagic.Scene({
      triggerElement: fullPageSections[i],
      triggerHook: 0,
      duration: sceneDuration
    })
      .setPin(fullPageSections[i], {pushFollowers: false})
      .addTo(controller);

    // scene to control section fade
    new ScrollMagic.Scene({
      triggerElement: fullPageSections[i],
      triggerHook: 0,
      duration: $(fullPageSections[i]).outerHeight()
    })
      .setClassToggle(fullPageSections[i], 'active')
      .addTo(controller);

    // change scene dutation for each section
    sceneDuration = sceneDuration - $(fullPageSections[i]).outerHeight();

  }

  // scene to control slideshow overlay
  let slideshowScene = new ScrollMagic.Scene({
    triggerElement: '.slideshow',
    triggerHook: 0,
    duration: slideshowContainer.outerHeight()
  })
    .setClassToggle('.slideshow', 'active')
    .addTo(controller);


});
