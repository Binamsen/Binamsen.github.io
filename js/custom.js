$(window).on('load',(function () {
  var $sitePreloaderSelector = $('.loader');
  $sitePreloaderSelector.delay(1000).fadeOut(500);
}));
// getting length of letter
const logo = document.querySelectorAll("#loader path");
for (let i = 0; i<logo.length; i++) {
	console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}

// scrollreveal
(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal('.skills .col3 , .portfolio-wrapper .col4 , .ido .col4',{
    delay: 200,
    reset: false,
    interval: 120,
    distance: '100px',
    origin: 'bottom',
    easing: 'ease',
  });

})();

// package-carousel
$('.logo-carousel').owlCarousel({
  loop:true,
  margin:80,
  responsiveClass:true,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:4000,
  responsive:{
      0:{
          loop:true,
          items:1,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:4000
      },
      600:{
          loop:true,
          items:2,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:4000
      },
      768:{
          loop:true,
          items:3,
          nav:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:4000
      },
      1000:{
          items:5
      }
      
  }
});

// moving the background on mouse movement
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 10;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

  $('.circles-wrap').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 50;
  lFollowY = (10 * lMouseY) / 50;

});

moveBackground();
