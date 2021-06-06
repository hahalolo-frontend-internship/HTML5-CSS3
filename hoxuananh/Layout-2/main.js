// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance1 = new Parallax(scene);

// LANDING PAGE ANIMATION
var scene2 = document.getElementById("scene-2");
var parallaxInstances2 = new Parallax(scene2);

var scene3 = document.getElementById("scene-3");
var parallaxInstances3 = new Parallax(scene3);

var scene4 = document.getElementById("scene-4");
var parallaxInstances4 = new Parallax(scene4);

var scene5 = document.getElementById("scene-5");
var parallaxInstances5 = new Parallax(scene5);

var scene6 = document.getElementById("scene-6");
var parallaxInstances6 = new Parallax(scene6);

var scene7 = document.getElementById("scene-7");
var parallaxInstances7 = new Parallax(scene7);


var scene8 = document.getElementById("scene-8");
var parallaxInstances8 = new Parallax(scene8);


var scene9 = document.getElementById("scene-9");
var parallaxInstances9 = new Parallax(scene9);


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".header__top").addClass("sticky");
    }else{
        $(".header__top").removeClass("sticky");

    }
}); 


$(document).ready(function () {
    $('.your-class').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      navigation:true,

    });
  });