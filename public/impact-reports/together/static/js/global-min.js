Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw TypeError("predicate must be a function");for(var o=arguments[1],i=0;i<n;){var a=e[i];if(t.call(o,a,i,e))return a;i++}},configurable:!0,writable:!0}),$(function(){var t=$(window),e=$("body"),n=($(".page-financials").length,$(".page-story").length,$(".js-button-hamburger"));function o(){e.removeClass("js-nav-main__show"),n.removeClass("js-button-hamburger__active")}if(n.on("click",function(){$(this).toggleClass("js-button-hamburger__active")}),$(".js-button-nav-main").on("click",function(){e.toggleClass("js-nav-main__show")}),document.onkeydown=function(t){("key"in(t=t||window.event)?"Escape"==t.key||"Esc"==t.key:27==t.keyCode)&&o()},$(".js-nav-overlay").on("click",o),$('a[href*="#"]').not('[href="#"]').on("click",function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}}),$(".js-story-thumbs").length){var i=$(".js-story-thumbs__item");t.one("touchstart",function(){i.each(function(){!function t(e){e.on("click.touchDisable",function(n){n.preventDefault(),e.off("click.touchDisable"),i.not(e).each(function(){t($(this))})})}($(this))})}),i.on("focus mouseenter",function(t){var n,o=$(this);i.not(o).addClass("js-inactive").removeClass("js-active"),o.addClass("js-active").removeClass("js-inactive"),e.width()<600&&(n=o,window.setTimeout(function(){$("html, body").animate({scrollTop:n.offset().top},250)},550))}),i.on("blur mouseleave",function(){i.removeClass("js-active js-inactive")});var a=function(){e.width()<600&&i.each(function(){var t=$(this),e=t[0].scrollHeight;t.css("max-height",e)})};if(e.hasClass("page-home"))a();else if(e.hasClass("page-story")){var s=$(".js-section-story__end"),c=new MutationObserver(function(t){t.forEach(function(t){"class"===t.attributeName&&(-1!==s.prop(t.attributeName).indexOf("slick-active")&&(a(),c.disconnect()))})});c.observe(s[0],{attributes:!0})}window.matchMedia("(orientation: portrait)").addListener(function(t){a()})}var r=document.getElementById("creditsModal"),l=document.getElementById("creditsNavButton"),u=document.getElementById("creditsStoryButton"),f=document.getElementById("creditsClose");null!=l&&(l.onclick=function(){r.style.display="block"}),null!=u&&(u.onclick=function(){r.style.display="block"}),f.onclick=function(){r.style.display="none"},window.onclick=function(t){t.target==r&&(r.style.display="none")}});