var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.background').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  $('.nokey-wrap').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-200, Math.min(200, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-200, Math.min(200, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

$(window).on("scroll",function () {
  if ($(this).scrollTop() > 100) {
    $('.fixed1').css('background', 'rgba(255,255,255,1)');
  }
  else {
    $('.fixed1').css('background', 'rgba(255,255,255,0)');
  }
});