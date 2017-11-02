$(document).ready(function(){
$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
});

//Smooth Scrolling
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
        $(".header").css("background-color", "rgba(16,16,20,1)");
        $(".link").css("padding-top", "30px");
        $(".link").css("padding-bottom", "30px");
        $(".header").css("box-shadow", "0 3px 50px rgba(0, 0, 0, 0.75)");
    }
    else {
        $(".header").css("background-color", "rgba(0,0,0,0)");
        $(".link").css("padding-top", "60px");
        $(".link").css("padding-bottom", "60px");
        $(".header").css("box-shadow", "0 3px 50px rgba(0, 0, 0, 0)");
    }
});
//Parallax
function simpleParallax() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;
    //Every element with the class "scroll" will have parallax background
    //Change the "0.3" for adjusting scroll speed.
    $('.scroll').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax();
});
var scwease = require('scroll-with-ease');
scwease(element, 1500, [0.42, 0.0, 0.58, 1.0]);
