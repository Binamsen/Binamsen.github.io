$(window).on('load',(function () {
  var $sitePreloaderSelector = $('.loader');
  $sitePreloaderSelector.delay(1000).fadeOut(500);
}));
// getting length of letter
const logo = document.querySelectorAll("#loader path");
for (let i = 0; i<logo.length; i++) {
	console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}

// $(document).ready(function() {
//   $(".portfolio-wrapper .view-detail").click(function(){
//     $(".project-detail").css({"right":"0","width":"100%"});
//   });
//   $(".project-detail .close-btn").click(function(){
//     $(".project-detail").css({"right":"100vw","width":"0%"});
//   });
//   $(".portfolio-wrapper .row .col4:nth-child(1)").click(function(){
//     $(".project-detail .content:nth-child(1)").show().css({"display":"inline-block"});
//     $(".project-detail .content:nth-child(1)").siblings(".content").hide().css({"display":"none"});
//   });
//   $(".portfolio-wrapper .row .col4:nth-child(2)").click(function(){
//     $(".project-detail .content:nth-child(2)").show().css({"display":"inline-block"});
//     $(".project-detail .content:nth-child(2)").siblings(".content").hide().css({"display":"none"});;
//   });
//   $(".portfolio-wrapper .row .col4:nth-child(3)").click(function(){
//     $(".project-detail .content:nth-child(3)").show().css({"display":"inline-block"});
//     $(".project-detail .content:nth-child(3)").siblings(".content").hide().css({"display":"none"});;
//   });
//   $(".portfolio-wrapper .row .col4:nth-child(4)").click(function(){
//     $(".project-detail .content:nth-child(4)").show().css({"display":"inline-block"});
//     $(".project-detail .content:nth-child(4)").siblings(".content").hide().css({"display":"none"});;
//   });
// });

// scrollreveal
(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal('.skills .col3 , .portfolio-wrapper .col4 , .ido .col4',{
    delay: 200,
    reset: true,
    interval: 120,
    distance: '100px',
    origin: 'bottom',
    easing: 'ease',
  });

})();

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
