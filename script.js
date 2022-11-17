$(function () {
    $(".owl-carousel").owlCarousel({
        // items: 3,
        // nav: true,
        loop:true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 700,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
});