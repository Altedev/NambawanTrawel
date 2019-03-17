$(document).ready( function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
        },
        // breakpoints: {
        //             992: {slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10},
        //             768: {slidesPerView: 1, slidesPerGroup: 1, slidesPerColumn: 2},
        //             750: {slidesPerView: 1, slidesPerGroup: 1, slidesPerColumn: 1},
        //             650: {slidesPerView: 1, slidesPerGroup: 1, slidesPerColumn: 1}
        //         }
    });


    $('#burger').on('click', function () {
        $('.list').slideToggle('slow', function () {
            $('#burger').hide();
            $('#close').show();
        })
    });

    $('#close').on('click', function () {
        $('.list').slideToggle('slow', function () {
            $('#close').hide();
            $('#burger').show();
        })
    });





    $(window).scroll(function() {
        var top_of_element = $("#topHowItWas").offset().top;
        var bottom_of_element = $("#topHowItWas").offset().top + $("#topHowItWas").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        var top_of_element_bot = $("#botHowItWas").offset().top;
        var bottom_of_element_bot = $("#botHowItWas").offset().top + $("#botHowItWas").outerHeight();
        var bottom_of_screen_bot = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen_bot = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $('#topBlockHow').addClass('animated delay-1s bounceInRight');
        }
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $('#topTextHow').addClass('animated delay-1s bounceInLeft');
        }
        if ((bottom_of_screen_bot > top_of_element_bot) && (top_of_screen_bot < bottom_of_element_bot)){
            $('#botBlockHow').addClass('animated delay-1s bounceInLeft');
        }
        if ((bottom_of_screen_bot > top_of_element_bot) && (top_of_screen_bot < bottom_of_element_bot)){
            $('#botTextHow').addClass('animated delay-1s bounceInRight');
        }


    });
});