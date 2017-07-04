$('.banner').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 660,
            settings: {
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 320,
            settings: {
                dots: false
            }
        }
    ]
});


$('.certificate-items').lightGallery({

});

$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel();

});

$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
         $( ".mobile-menu" ).slideToggle( "slow", function() {});
        $('.mobile-menu').toggleClass('open');
    });
});


