$(window).on("scroll",function () {
  if ($(this).scrollTop() > 10) {
  }
  else {
    $('.header-left').css('background', 'rgba(0,0,0,0)');
  }
});
/*
//Parallax
function simpleParallax() {
   //This variable is storing the distance scrolled
   var scrolled = $(window).scrollTop() + 2;
   var winW = window.innerWidth;

   if( winW >= 1000) {
       $('.cover').css('background-position', '0' + -(scrolled * 0.1) + 'px');
   } else {
       $('.cover').css('background-position', '0' + -(scrolled * 0) + 'px');
   }
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
   simpleParallax();
});
var scwease = require('scroll-with-ease');
scwease(element, 1500, [0.42, 0.0, 0.58, 1.0]);
*/

