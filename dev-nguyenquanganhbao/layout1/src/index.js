$(document).ready(function () {
    //Open menu
    $( "#openMemu").click(function() {
        $('#nav-menu').css('animation', 'Open .5s forwards');
        $('.overlay-nav-menu').css('visibility', 'visible');
        $('#body').css('overflowY', 'hidden');
    });
    //Close menu
    $( "#closeMenu").click(function() {
        $('#nav-menu').css('animation', 'Close .5s forwards');
        $('.overlay-nav-menu').css('visibility', 'collapse');
        $('#body').css('overflowY', 'unset');
    });

    //click btn scroll top
    $( "#btn-scroll-ontop").click(function() {
        window.scroll(0, 0);
    });

    //scroll
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            $('#sticky').addClass('scroll-sticky');
            $('#btn-scroll-ontop').css('opacity', '1');
        }
        else {
            $('#sticky').removeClass('scroll-sticky');
            $('#btn-scroll-ontop').css('opacity', '0');
        }
    });


    //active
    $('.header-right__navmenu-list li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });


    //count
    $('.statistical-items__count').counterUp({
        delay: 10,
        time: 1500
    });


    //slick
    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true
    });
})