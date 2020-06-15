$(document).ready(function(){ 

    $('#owl-clients').owlCarousel({
        loop:false,
        nav:true,
        navText: ['<span class="span-roundcircle left-roundcircle"><i class="left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="right-arrow"></span>'],
        dots: false,
        stagePadding: 0,
        margin:10,
        autoplay:false,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
       }
    });

    $('#owl-related-articles').owlCarousel({
        loop:false,
        nav:true,
        navText: ['<span class="span-roundcircle left-roundcircle"><i class="left-arrow"></span>','<span class="span-roundcircle right-roundcircle"><i class="right-arrow"></span>'],
        dots: false,
        stagePadding: 0,
        margin:0,
        autoplay:false,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1300:{
                items:3
            }
       }
    });

});

