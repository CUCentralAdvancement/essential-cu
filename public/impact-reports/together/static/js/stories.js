// ***** Stories page JS ******

$(function() {
  var $window = $( window );
  var $body = $( 'body' );

  // https://github.com/kenwheeler/slick/
  var $slider = $( '.js-story-slider' );

  // run progressive image loader on Slick init (must define before instantiated)
  $slider.on( 'init', function(){
    progressiveImageLoader();
  });

  // Run SLICK for Story slider
  $slider.slick({
    infinite: false,
    adaptiveHeight: true
  });

  // focus on first slide so keyboard nav works immediately - https://github.com/kenwheeler/slick/issues/901
  $slider.find('.slick-active').focus();

  // Progress bar - https://codepen.io/mjtweaver/pen/pEkYgQ (using transform instead of bg-grad)
  var $progressBar = $( '.js-story-progress' );
  var $progressBarLabel = $( '.js-story-progress__label' );

  // Slick BEFORECHANGE events
  $slider.on( 'beforeChange', function(event, slick, currentSlide, nextSlide) {

    // Progress bar
    var calc = ( ( nextSlide ) / ( slick.slideCount-1 ) ) * 100;
    $progressBar.css( 'transform', 'translateX( ' + calc + '%').attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  });

  // Added to speed up debugging
  if (window.location.hash) {
    var jumpToSlide = window.location.hash;
    $slider.slick("slickGoTo", jumpToSlide.substring(1));
  }

  // Slick AFTERCHANGE events
  $slider.on( 'afterChange', function(event, slick, currentSlide, nextSlide) {
    // tracking pixel
    if (currentSlide == 1) {
      //console.log("triggered tracking");
      var image = document.getElementById('mc-tracking');
      image.src = image.getAttribute('data-src');
    }
    // progressive image loader
    progressiveImageLoader();

    // handle ambient sound
    runAmbientSound( currentSlide );

    // stop SoundCite instance
    stopSoundCite();

    // remove videos previously added
    removeVideo();

    // handle iOS player differently
    pausePlayerVideo();

    // do iframe video
    runVideo();

    // scroll to top after slide change
    if ( $window.scrollTop() > 0 ) {
      $('html, body').animate({
        scrollTop: 0
      }, 10 );
    }
  });


  // VIDEO ***********************

  // track if video has been added
  var videoIsAdded = false;

  // take iframe script template and append
  function runVideo(){
    var $videoEl = $( '.slick-active .js-story-video-template' );

    if ( $videoEl.length ) {
      var $videoContainer = $videoEl.parent( '.js-story-video-container' );
      $videoContainer.append( $videoEl.html() );
      $videoContainer.addClass( 'js-story-video-added' );
      videoIsAdded = true;
    }
  }

  // pause all iOS videos
  function pausePlayerVideo() {
    if (typeof iosPlayer !== 'undefined') {
      iosPlayer.pause();
      var playButton = document.getElementById("play-button");
      playButton.style.display = "block";
    }
  }
  // remove previously added iframe video
  function removeVideo(){
    if ( videoIsAdded ){
      $( '.js-story-video-added' ).children( '.js-story-video' ).remove();
      videoIsAdded = false;
    }
  }


  // AUDIO FUNCTIONALITY **********************************

  // Audio mute button
  var $muteBtn = $( '.js-story-audio-mute' );
  $muteBtn.on( 'click', function() {
    var $this = $(this);
    var svgAudioWave = document.getElementById("volume-up");
    var svgSpeaker = document.getElementById("volume-off");
    var svgOnOff = document.getElementById("On_off");

    // mute all ambient sound using global Howler.js method
    if ( $this.hasClass( 'js-mute') ){
      Howler.mute(false);
      svgAudioWave.className.baseVal = "";
      svgSpeaker.style.fill = "#000";
      svgOnOff.style.fill = "#000";
    } else {
      Howler.mute(true);
      svgAudioWave.className.baseVal = "howler-muted";
      svgSpeaker.style.fill = "#606060";
      svgOnOff.style.fill = "#606060";
    }

    $this.toggleClass( 'js-mute' );
  });

  // Create array of ojects for each slide's audio properties to access after slide change
  var audioSlides = [];

  // Loop through slides and populate ^
  $( '.js-section-story__audio' ).each( function(){
    var $this = $(this);
    var thisSlideIndex = $this.data( 'slick-index' );
    var thisSoundFile = $this.data( 'ambienturl');
    var thisSoundInstance = '';

    // create new HowlerJS sound object for each ambient audio track
    if ( thisSoundFile ) {
      thisSoundInstance = new Howl({
        src: [ thisSoundFile ],
        autoplay: false,
        loop: true,
        volume: 1
      });
    }

    // populate array
    audioSlides.push({
      'slideIndex': thisSlideIndex,
      'soundInstance': thisSoundInstance,
      'stopAmbient': $this.data( 'ambientstop' ),
      'isPlaying': false
    });
  });

  // AMBIENT SOUND HANDLER, called after each slide change
  /* conditions:
    play sound
    stop sound
    stop sound if another sound already playing and play new sound
    don't play same sound again if sound already playing
  */
  function runAmbientSound( currentSlide ){

    // get obj from array that contains current slide's audio data-attr info

    /* ES6 version:
        var thisAudioSlide = audioSlides.find( ({ slideIndex }) => slideIndex === currentSlide );
      ES5 for IE11: */
    var thisAudioSlide = audioSlides.find(function (_ref) {
      var slideIndex = _ref.slideIndex;
      return slideIndex === currentSlide;
    });

    // stop ambient sound
    if ( thisAudioSlide.stopAmbient ) {
      stopAmbientSound();
    }

    // play ambient sound, but not if same sound already playing
    if ( thisAudioSlide.soundInstance && !thisAudioSlide.isPlaying ){

      // stop any other ambient sounds before playing this one
      stopAmbientSound();

      // reset vol to 1 if previous fade out
      thisAudioSlide.soundInstance.volume(1);

      // play sound
      thisAudioSlide.soundInstance.play();

      // set isPlaying
      thisAudioSlide.isPlaying = true;
    }
  }

  // Stop previously playing ambient sound
  function stopAmbientSound() {

    // find slide currently playing (.find method gets first instance, should only be 1)

    /* ES6 version:
        var playingAudioSlide = audioSlides.find( ({ isPlaying })  => isPlaying === true );
      ES6 for IE11: */
    var playingAudioSlide = audioSlides.find(function (_ref) {
      var isPlaying = _ref.isPlaying;
      return isPlaying === true;
    });


    if ( playingAudioSlide ){

      // stop sound after fade complete event, don't just mute
      playingAudioSlide.soundInstance.on( 'fade', function(){
        playingAudioSlide.soundInstance.stop();
      });

      // fade sound out from vol 1 to 0 over 1000ms
      playingAudioSlide.soundInstance.fade( 1, 0, 1000 );

      // reset isPlaying
      playingAudioSlide.isPlaying = false;
    }
  }

  // Handle SoundCite body audio
  var $soundCites = $( '.soundcite' );
  $soundCites.each( function(){
    var $this = $( this );

    // mutation observer to listen for class change to adjust ambient volume while playing, when paused, and when complete
    var classObserver = new MutationObserver( function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          var newClass = $this.prop(mutation.attributeName);

          if ( newClass.indexOf( 'soundcite-play') !== -1 ) {
            // restore ambient vol
            Howler.volume( 1 );

            // cancel mutation observer
            classObserver.disconnect();

          } else if ( newClass.indexOf( 'soundcite-pause' ) !== -1 ) {
            // lower ambient vol
            Howler.volume( 0.10 );
          }
        }
      });
    });

    $this.on( 'click', function(){
      if ( $this.hasClass('soundcite-play') ) { // is stopped. clicking will play
        // run mutation observer to track changes hereafter
        classObserver.observe( $this[0], { attributes: true } );
      }
    });

  });

  // run after slide change
  function stopSoundCite() {
    // if any SoundCite instances are playing, stop them
    if (typeof soundcite !== 'undefined') {
      soundcite.pause_all_clips();
    }
  }
  // ^^^ End AUDIO FUNCTIONALITY


  // Progressive Image Loading **************
    // https://codepen.io/jmperez/pen/yYjPER
    // note: can not work with picture/img srcsets, or background-images.

  function progressiveImageLoader() {
    var $progContainer;

    // load only active slide if within story section
    $progContainer = $( '.slick-active .js-img-prog-container' );

    $progContainer.each( function(){
      var $this = $( this );
      var $progImageLow = $this.find( '.js-img-prog-low' );

      // 1: load small image through JS,and show hidden image on page
      var img = new Image();
      img.src = $progImageLow.attr('src');
      img.onload = function () {
        $progImageLow.addClass( 'js-img-prog-loaded' );
      };

      // 2: load large image through JS, append to page when loaded
      var progImageFull = new Image();
      progImageFull.src = $progImageLow.data( 'large' );
      progImageFull.alt = $progImageLow.attr( 'alt' );
      progImageFull.onload = function () {
        progImageFull.className = 'js-img-prog-high js-img-prog-loaded';
      };
      progImageFull.style = 'position:absolute';
      $this.append( progImageFull );

      // 3: don't re-run this on already loaded images
      $this.removeClass( 'js-img-prog-container' );
    });
  }

});
