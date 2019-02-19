 $(document).ready(function(){
    $(".loader").delay(3500).fadeOut(500);
    $("#content-wrapper").hide().delay(3600).fadeIn(500);

    // imagechange
    $("#slideshow").children("img:gt(0)").hide();
        setInterval(function () {
            $('#slideshow img:first')
                .fadeOut(700)
                .next()
                .fadeIn(700)
                .end()
                .appendTo('#slideshow');
        }, 3000);
});
    
    //scrolling effect
        $(function () { 
            // init
            var controller = new ScrollMagic.Controller();

            // define movement of panels
            var wipeAnimation = new TimelineMax()
                // animate to second panel
                .to("#slideContainer", 0.5, {z: -150})      // move back in 3D space
                .to("#slideContainer", 1,   {x: "-25%"})    // move in to first panel
                .to("#slideContainer", 0.5, {z: 0})             // move back to origin in 3D space
                // animate to third panel
                .to("#slideContainer", 0.5, {z: -150, delay: 1})
                .to("#slideContainer", 1,   {x: "-50%"})
                .to("#slideContainer", 0.5, {z: 0})
                // animate to forth panel
                // .to("#slideContainer", 0.5, {z: -150, delay: 1})
                // .to("#slideContainer", 1,   {x: "-75%"})
                // .to("#slideContainer", 0.5, {z: 0});

            // create scene to pin and link animation
            new ScrollMagic.Scene({
                    triggerElement: "#pinContainer",
                    triggerHook: "onLeave",
                    duration: "500%"
                })
                .setPin("#pinContainer")
                .setTween(wipeAnimation)
                .addTo(controller);
        });
    