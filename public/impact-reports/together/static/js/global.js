// ***** Global site-wide JS ******

// Polyfill array .find for IE11 - https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}

$(function() {
  var $window = $( window );
  var $body = $( 'body' );

  var $isPageFin = $('.page-financials' ).length;
  var $isPageStory = $('.page-story' ).length;


  // Global button toggle (controls appearance of self)
  var $burgers = $( '.js-button-hamburger' );
  $burgers.on( 'click', function(){
    $(this).toggleClass( 'js-button-hamburger__active' );
  });

  // Main Nav button toggle
  $( '.js-button-nav-main' ).on( 'click', function(){
    $body.toggleClass( 'js-nav-main__show' );
  });

  // close menu and modals
  function closeModal() {
    $body.removeClass( 'js-nav-main__show' );
    $burgers.removeClass( 'js-button-hamburger__active' );
	}

  // global ESC key close menu and modals
  document.onkeydown = function(e) {
		e = e || window.event;
    var isEscape = false;

		if ( 'key' in e ) {
			isEscape = ( e.key == 'Escape' || e.key == 'Esc' );
		} else {
			isEscape = ( e.keyCode == 27 );
		}
		if ( isEscape ) {
			closeModal();
		}
  };

  // close menu and modals if overlay clicked
  $( '.js-nav-overlay' ).on( 'click', closeModal );

  // Smooth scroll - https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]').not('[href="#"]').on( 'click', function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


  // HOME and Story thumbnail hover/click/tab functionality >>>>>>>
  var $storyThumbs = $( '.js-story-thumbs' );
  if ( $storyThumbs.length ){
    var $links = $( '.js-story-thumbs__item' );

    // handle click 1x to view and 1x to click-through on mobile
    $window.one('touchstart', function(){
      $links.each( function(){
        setMobileClickThrough( $(this) );
      });
    });

    function setMobileClickThrough( $link ){
      $link.on('click.touchDisable', function(e){
        e.preventDefault();
        $link.off('click.touchDisable');
        $links.not($link).each( function(){
          setMobileClickThrough( $(this) );
        });
      });
    }

    // scroll to top after toggling vertical accordion
    function setMobileTop( $link ){
      window.setTimeout( function(){
        $('html, body').animate({
          scrollTop: $link.offset().top
        }, 250 ); // scroll animate duration
      }, 550); // wait for .5s CSS transition to complete
    }

    // set active and inactive states on focus or mouseenter
    $links.on('focus mouseenter', function(e){
      var $this = $(this);
      $links.not($this).addClass('js-inactive').removeClass('js-active');
      $this.addClass('js-active').removeClass('js-inactive');

      // scroll to top of active section
      if ( $body.width() < 600 ){
        setMobileTop( $this );
      }
    });

    // return to initial state if all lose focus or mouseleave
    $links.on( 'blur mouseleave', function(){
      $links.removeClass('js-active js-inactive');
    });

    // get natural height of each item. use to set max for mobile vertical accordion behavior
    var setHeight = function() {
      if ( $body.width() < 600 ){
        $links.each( function(){
          var $this = $(this);
          var trueHeight = $this[0].scrollHeight;
          $this.css( 'max-height', trueHeight );
        });
      }
    };

    if ($body.hasClass('page-home')){
      setHeight();
    } else if ($body.hasClass('page-story')){
      var $endSlide = $('.js-section-story__end');

      // otherwise wait for it to be initialized
      var classObserver = new MutationObserver( function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === 'class') {
            var newClass = $endSlide.prop(mutation.attributeName);

            if ( newClass.indexOf( 'slick-active') !== -1 ) {
              setHeight();

              // cancel mutation observer
              classObserver.disconnect();
            }
          }
        });
      });

      // run mutation observer to track changes hereafter
      classObserver.observe( $endSlide[0], { attributes: true } );
    }

    // reset setHeight if orientation changes
    var mqHeight = window.matchMedia( '(orientation: portrait)' );
    mqHeight.addListener( function(query){
      setHeight();
    });

  } // ^^ END HOME and Story thumbnail hover/click/tab functionality

  // CREDITS MODAL
  var modal = document.getElementById("creditsModal");
  var btn = document.getElementById("creditsNavButton");
  var btn2 = document.getElementById("creditsStoryButton");

  // Get the <span> element that closes the modal
  var close = document.getElementById("creditsClose");

  // When the user clicks on the button, open the modal
  if (typeof btn !== "undefined" && btn !== null) {
    btn.onclick = function () {
      modal.style.display = "block";
    }
  }

  // This button only exists on stories
  if (typeof btn2 !== "undefined" && btn2 !== null) {
    btn2.onclick = function () {
      modal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});


