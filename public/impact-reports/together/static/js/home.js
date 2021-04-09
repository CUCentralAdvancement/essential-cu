// ***** Home page JS ******
$(function() {
  var $window = $( window );
  var $body = $( 'body' );

  // ensure hero images are loaded before revealing and starting ScrollMagic scene (IE11 alternative to window.onload)
  var $heroImages = $( '.js-scene-1 img' );
  var totalHeroImages = $heroImages.length;
  var heroImagesLoaded = 0;

  // load copy of each image into memory 
  $heroImages.each( function(i, img){
    $('<img>').on( 'load', imageLoaded ).attr('src', $(this).attr('src'));
  });

  function imageLoaded(){
    heroImagesLoaded++;

    if ( heroImagesLoaded == totalHeroImages ){
      //initiate 1st SM scene
      runSMGSAP();

      // reveal content
      $( '.js-home-section-hero__overlay' ).fadeOut( 400 );
    }
  }


  // ScrollMagic + GSAP >>>>>>>>>>>>>>>>>>>>>>>>>>

	// init SM controller
	var controller = new ScrollMagic.Controller({ paused: true });

	// global easing method
  var globalEase = 'Sine.easeInOut';
  
  // SCENE 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var scene1Timeline = new TimelineMax({paused: true});

  // scene timing and delay duration var/multiplier (in seconds) - increase for testing
  var t1 = 1;

  // left images
  scene1Timeline.from( '.home-section-hero__commoutreach', t1, { x: '-10%', y: '10%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__holguine', t1, { x: '-10%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__chip', t1, { x: '-5%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__davestudents', t1, { x: '10%', y: '10%', ease: globalEase }, 0 );

  // right images
  scene1Timeline.from( '.home-section-hero__bodine', t1, { x: '7%', y: '3%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__willow', t1, { x: '9%', y: '4%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__jakedoc', t1 * 1.1, { x: '40%', y: '-2%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__sun', t1 * 1.75, { x: '-15%', y: '-10%', ease: globalEase }, 0 );
  
  // mountains
  scene1Timeline.from( '.home-section-hero__mountains-bg', t1, { y: '10%', ease: globalEase }, 0 );
  scene1Timeline.from( '.home-section-hero__mountains-fg', t1 * .75, { y: '60%', ease: globalEase }, t1 * .25 );

  // headingtext
  scene1Timeline.from( '.home-section-hero__headings h1', t1 * .85, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .75 );
  scene1Timeline.from( '.home-section-hero__headings h2', t1 * .75, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .85 );
  scene1Timeline.from( '.js-home-section-hero__scrolldown', t1, { autoAlpha: 0, y: '-20%', ease: globalEase }, t1 * 1.2 );
  scene1Timeline.from( '.home-section-hero__subhead', t1 * .5, { autoAlpha: 0, y: '100%', ease: globalEase }, t1 * 1.2 );

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.js-scene-1',
    triggerHook: 'onEnter'
  });

  // run when called
  function runSMGSAP(){
    scene1.setTween( scene1Timeline ).addTo( controller );
    // WIP - repeat for testing:
    // scene1.setTween( scene1Timeline.repeat(-1).repeatDelay(2) ).addTo( controller );
  }
  
  var scene1reverse = new ScrollMagic.Scene({
    triggerElement: '.js-scene-2',
    triggerHook: 'onLeave'
  })
  .on( 'enter', function( event ) {
    if ( event.scrollDirection == 'FORWARD' ) {
      scene1Timeline.pause(0);
    }
  })
  .on( 'leave', function( event ) {
    if ( event.scrollDirection == 'REVERSE' ) {
      scene1Timeline.play(0);
    }
  })
  .addTo( controller );

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  SCENE 1

  // text transition timing and delay duration var/multiplier (in seconds), used throughout scenes 2+
  var t2 = 0.75;

  // SCENE 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var scene2Timeline = new TimelineMax({paused: true});

  // select all sub elements
  var $scene2subs = $( '.js-scene-2 *:not(div)' );

  scene2Timeline.staggerFrom( $scene2subs, t1, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .25 );

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.js-scene-2'
  })
  .setTween( scene2Timeline )
  .addTo( controller );

  var scene2reverse = new ScrollMagic.Scene({
    triggerElement: '.js-scene-3',
    triggerHook: 'onLeave'
  })
  .on( 'enter', function( event ) {
    if ( event.scrollDirection == 'FORWARD' ) {
      scene2Timeline.pause(0);
    }
  })
  .on( 'leave', function( event ) {
    if ( event.scrollDirection == 'REVERSE' ) {
      scene2Timeline.play(0);
    }
  })
  .addTo( controller );

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  SCENE 2

  // SCENE 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var scene3Timeline = new TimelineMax({paused: true});

  // select all sub elements
  var $scene3subs = $( '.js-scene-3 > h2' );
  var $scene3listSubs = $( '.js-story-thumbs__item' );

  scene3Timeline.staggerFrom( $scene3subs, t1, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .25 );
  scene3Timeline.staggerFrom( $scene3listSubs, t1, { autoAlpha: 0, y: '10%', ease: globalEase }, t1 * .25, t1 * .5 );

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.js-scene-3'
  })
  .setTween( scene3Timeline )
  .on('enter', function (event) {
    // HOME and Story thumbnail hover/click/tab functionality >>>>>>>
    var $storyThumbs = $( '.js-story-thumbs' );
    if ( $storyThumbs.length ){
      var $links = $( '.js-story-thumbs__item' );

      // get natural height of each item. use to set max for mobile vertical accordion behavior
      (function setHeight() {
        if ( $body.width() < 600 ){
          $links.each( function(){
            var $this = $(this);
            var trueHeight = $this[0].scrollHeight;
            $this.css( 'max-height', trueHeight );
          });
        }
      })();
    }
  })
  .addTo( controller );

  var scene3reverse = new ScrollMagic.Scene({
    triggerElement: '.js-scene-4',
    triggerHook: 'onLeave'
  })
  .on( 'enter', function( event ) {
    if ( event.scrollDirection == 'FORWARD' ) {
      scene3Timeline.pause(0);
    }
  })
  .on( 'leave', function( event ) {
    if ( event.scrollDirection == 'REVERSE' ) {
      scene3Timeline.play(0);
    }
  })
  .addTo( controller );


  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  SCENE 3

  // SCENE 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var scene4Timeline = new TimelineMax({paused: true});

  // select all sub elements
  var $scene4subs = $( '.js-scene-4 > *:not( .home-section-generosity__graphic )' );
  var $scene4graphic = $( '.home-section-generosity__graphic' );

  scene4Timeline.staggerFrom( $scene4subs, t1, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .25 );
  scene4Timeline.from( $scene4graphic, t1, { autoAlpha: 0, y: '10%', ease: globalEase }, t1 * .25, t1 * 1.25 );

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.js-scene-4'
  })
  .setTween( scene4Timeline )
  .addTo( controller );

  var scene4reverse = new ScrollMagic.Scene({
    triggerElement: '.js-scene-5',
    triggerHook: 'onLeave'
  })
  .on( 'enter', function( event ) {
    if ( event.scrollDirection == 'FORWARD' ) {
      scene4Timeline.pause(0);
    }
  })
  .on( 'leave', function( event ) {
    if ( event.scrollDirection == 'REVERSE' ) {
      scene4Timeline.play(0);
    }
  })
  .addTo( controller );

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  SCENE 4

  // SCENE 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  var scene5Timeline = new TimelineMax({paused: true});

  // select all sub elements
  var $scene5subs = $( '.js-scene-5 h2, .js-scene-5 h3' );
  var $scene5subPs = $( '.js-scene-5 p' );

  scene5Timeline.staggerFrom( $scene5subs, t1, { autoAlpha: 0, y: '50%', ease: globalEase }, t1 * .25 );
  scene5Timeline.staggerFrom( $scene5subPs, t1, { autoAlpha: 0, y: '10%', ease: globalEase }, t1 * .25, t1 * .5 );

  var scene5 = new ScrollMagic.Scene({
    triggerElement: '.js-scene-5'
  })
  .setTween( scene5Timeline )
  .addTo( controller );

  var scene5reverse = new ScrollMagic.Scene({
    triggerElement: '.js-scene-6',
    triggerHook: 'onLeave'
  })
  .on( 'enter', function( event ) {
    if ( event.scrollDirection == 'FORWARD' ) {
      scene5Timeline.pause(0);
    }
  })
  .on( 'leave', function( event ) {
    if ( event.scrollDirection == 'REVERSE' ) {
      scene5Timeline.play(0);
    }
  })
  .addTo( controller );

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  SCENE 5


  // debug trigger for testing - requires JS plugin
	var doDebug = false;
 
  if ( doDebug ) {
    scene1.addIndicators();
    scene1reverse.addIndicators();
    scene2.addIndicators();
    scene2reverse.addIndicators();
    scene3.addIndicators();
    scene3reverse.addIndicators();
    scene4.addIndicators();
    scene4reverse.addIndicators();
    scene5.addIndicators();
    scene5reverse.addIndicators();
  }

});
