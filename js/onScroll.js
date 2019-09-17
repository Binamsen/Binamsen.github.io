//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition
//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var section1y = $('#section1').offset().top,
      section2y = $('#section2').offset().top,
      section3y = $('#section3').offset().top,
      // section4y = $('#section4').offset().top,
      // section5y = $('#section5').offset().top,
      // section6y = $('#section6').offset().top,
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === section1y) {
    targetUp = $('#section1');
    targetDown = $('#section2');
  } 
  else if (lastScrollTop === section2y) {
    targetUp = $('#section1');
    targetDown = $('#section3');
  } 
  else if (lastScrollTop === section3y) {
    targetUp = $('#section2');
    targetDown = $('#section4');
  } 
  // else if (lastScrollTop === section4y) {
  //   targetUp = $('#section3');
  //   targetDown = $('#section5');
  // } 
  // else if (lastScrollTop === section5y) {
  //   targetUp = $('#section4');
  //   targetDown = $('#section6');
  // } 
  // else if (lastScrollTop === section6y) {
  //   targetUp = $('#section5');
  //   targetDown = $('#section6');
  // } 
  else if (lastScrollTop < section2y) {
    targetUp = $('#section1');
    targetDown = $('#section2');
  } 
  else if (lastScrollTop < section3y) {
    targetUp = $('#section2');
    targetDown = $('#section3');
  } 
  // else if (lastScrollTop < section4y) {
  //   targetUp = $('#section3');
  //   targetDown = $('#section4');
  // } 
  // else if (lastScrollTop < section5y) {
  //   targetUp = $('#section4');
  //   targetDown = $('#section5');
  // } 
  // else if (lastScrollTop < section6y) {
  //   targetUp = $('#section5');
  //   targetDown = $('#section6');
  // } 
  // else if (lastScrollTop > section6y) {
  //   targetUp = $('#section6');
  //   targetDown = $('#section6');
  // } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 1000);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//

