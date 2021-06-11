function Open() {
    document.getElementById("nav-menu").style.animation = "Open .5s forwards";
    document.getElementById("overlay-nav-menu").style.visibility = "visible";
    document.getElementById("body").style.overflowY = "hidden";
}
function Close() {
    document.getElementById("nav-menu").style.animation = "Close .5s forwards";
    document.getElementById("overlay-nav-menu").style.visibility = "collapse";
    document.getElementById("body").style.overflowY = "unset";
}

function scrolltop(){
    window.scroll(0, 0);
}


//scroll
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let sticky = document.getElementById("sticky");
    let btnScroll = document.getElementById("btn-scroll-ontop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        sticky.style.backgroundColor = "#479d35";
        sticky.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
        document.getElementById("header").style.height = "60px";
        btnScroll.style.opacity = "1";
    } else {
        sticky.style.backgroundColor = "unset";
        sticky.style.boxShadow = "unset";
        document.getElementById("header").style.height = "126px";
        btnScroll.style.opacity = "0";
    }
}

//active
$(document).ready(function () {
    $('.header-right__navmenu-list li a').click(function () {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});



//count
$(document).ready(function () {
    $('.statistical-items__count').counterUp({
        delay: 10,
        time: 1500
    });
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