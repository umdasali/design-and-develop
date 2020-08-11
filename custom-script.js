/*///////////////////////////////////////////////////////
                work-section        
///////////////////////////////////////////////////////*/
$(function () {
    $('#imgGallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*///////////////////////////////////////////////////////
                testimonial       
///////////////////////////////////////////////////////*/
$(function () {
    $('#customers-testimonials').owlCarousel({
        items: 1,
        autoPlay: true,
        smartSpeed: 800,
        loop: true,
        pagination: true,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window

    });
});
/*///////////////////////////////////////////////////////
                    clients       
///////////////////////////////////////////////////////*/
$(function () {
    $('#client-slide').owlCarousel({
        items: 5,
        autoPlay: true,
        smartSpeed: 800,
        loop: true
    });
});

/*===============================================
                  animation on screen
=================================================*/
$(function(){
  //animate on scroll
  new WOW().init();
});