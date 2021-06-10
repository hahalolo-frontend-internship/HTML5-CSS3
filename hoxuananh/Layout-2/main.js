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


// khi scroll màn hình xuống lớn hơn 10 thì add class sticky vào ở element chứa class header__top ngược lại thì remove class
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".header__top").addClass("sticky");
    }else{
        $(".header__top").removeClass("sticky");

    }
}); 


/**
 * Speed tốc độ di chuyển slide
 * Hiển thị slide ở trung tâm, bao gồm các slide trước và tiếp theo.
 * VariableWidth Vô hiệu hóa vùng nhìn của slide
 * Dấu chấm định danh địa chỉ đên cho mỗi item show
 */

$(document).ready(function () {
    $('.your-class').slick({
      speed: 300,
      centerMode: true,
      variableWidth: true,
      dots:true,

    });
  });