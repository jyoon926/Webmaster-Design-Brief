$(document).ready(function(){
  //ScrollMagic
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  //White Background scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.more'
  })
  .setClassToggle('.whitebackground', 'whitebackground-after')
  .addIndicators({
    name: 'white background'
  })
  .addTo(controller);
  //Right scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.more'
  })
  .setClassToggle('.right', 'right-after')
  .addIndicators({
    name: 'right'
  })
  .addTo(controller);
  //Left scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.more'
  })
  .setClassToggle('.lefttext', 'left-after')
  .addIndicators({
    name: 'left'
  })
  .addTo(controller);
  //Sectiontitles scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.section1',
    triggerHook: .75
  })
  .setClassToggle('.sectiontitles', 'sectiontitle-after')
  .addIndicators({
    name: 'sectiontitle wrap'
  })
  .addTo(controller);
  //Section1 sectiontitle scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.section1',
    triggerHook: .75,
  })
  .setClassToggle('.sectiontitle1', 'sectiontitle-after')
  .addIndicators({
    name: 'sectiontitle 1'
  })
  .addTo(controller);
  //Section2 sectiontitle scene
  var Scene = new ScrollMagic.Scene({
    triggerElement: '.section2',
    triggerHook: .75,
  })
  .setClassToggle('.sectiontitle2', 'sectiontitle-after')
  .addIndicators({
    name: 'sectiontitle 2'
  })
  .addTo(controller);
  //Section1 fadeout sectiontitle scene
  var Scene = new ScrollMagic.Scene({
    triggerElement: '.section2',
    triggerHook: .75,
  })
  .setClassToggle('.sectiontitle1', 'sectiontitle-before')
  .addIndicators({
    name: 'sectiontitle 1 fadeout'
  })
  .addTo(controller);
  //Section3 sectiontitle scene
  var Scene = new ScrollMagic.Scene({
    triggerElement: '.section3',
    triggerHook: .75,
  })
  .setClassToggle('.sectiontitle3', 'sectiontitle-after')
  .addIndicators({
    name: 'sectiontitle 3'
  })
  .addTo(controller);
  //Section2 fadeout sectiontitle scene
  var Scene = new ScrollMagic.Scene({
    triggerElement: '.section3',
    triggerHook: .75,
  })
  .setClassToggle('.sectiontitle2', 'sectiontitle-before')
  .addIndicators({
    name: 'sectiontitle 2 fadeout'
  })
  .addTo(controller);

});


document.addEventListener('DOMContentLoaded', function() {

  //Spinning logo on home page
  var $logo = $('.logo-section1-img');
  var $win = $(window);

  $win.on('scroll', function () {
    var top = $win.scrollTop() / 3.5;
    $logo.css('transform', 'rotate(' + top + 'deg)');
  });

  //Smooth scrolling between anchors
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

  //Net effect
  var canvas = document.getElementById('nokey'),
     can_w = parseInt(canvas.getAttribute('width')),
     can_h = parseInt(canvas.getAttribute('height')),
     ctx = canvas.getContext('2d');

  // console.log(typeof can_w);

  var ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      alpha: 1,
      phase: 0
     },
     ball_color = {
       r: 255,
       g: 255,
       b: 255
     },
     R = 2,
     balls = [],
     alpha_f = 0.03,
     alpha_phase = 0,

  // Line
     link_line_width = 1,
     dis_limit = 400,
     add_mouse_point = true,
     mouse_in = false,
     mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      type: 'mouse'
     };

  // Random speed
  function getRandomSpeed(pos){
    var  min = -1,
       max = 1;
    switch(pos){
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
        break;
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
        break;
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
        break;
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
        break;
      default:
        return;
        break;
    }
  }
  function randomArrayItem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function randomNumFrom(min, max){
    return Math.random()*(max - min) + min;
  }
  console.log(randomNumFrom(0, 10));
  // Random Ball
  function getRandomBall(){
    var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
    switch(pos){
      case 'top':
        return {
          x: randomSidePos(can_w),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        }
        break;
      case 'right':
        return {
          x: can_w + R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        }
        break;
      case 'bottom':
        return {
          x: randomSidePos(can_w),
          y: can_h + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        }
        break;
      case 'left':
        return {
          x: -R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        }
        break;
    }
  }
  function randomSidePos(length){
    return Math.ceil(Math.random() * length);
  }

  // Draw Ball
  function renderBalls(){
    Array.prototype.forEach.call(balls, function(b){
       if(!b.hasOwnProperty('type')){
         ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
         ctx.beginPath();
         ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
         ctx.closePath();
         ctx.fill();
       }
    });
  }

  // Update balls
  function updateBalls(){
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
      b.x += b.vx;
      b.y += b.vy;

      if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
         new_balls.push(b);
      }

      // alpha change
      b.phase += alpha_f;
      b.alpha = Math.abs(Math.cos(b.phase));
      // console.log(b.alpha);
    });

    balls = new_balls.slice(0);
  }

  // loop alpha
  function loopAlphaInf(){

  }

  // Draw lines
  function renderLines(){
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
      for (var j = i + 1; j < balls.length; j++) {

         fraction = getDisOf(balls[i], balls[j]) / dis_limit;

         if(fraction < 1){
           alpha = (1 - fraction).toString();

           ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
           ctx.lineWidth = link_line_width;

           ctx.beginPath();
           ctx.moveTo(balls[i].x, balls[i].y);
           ctx.lineTo(balls[j].x, balls[j].y);
           ctx.stroke();
           ctx.closePath();
         }
      }
    }
  }

  // calculate distance between two points
  function getDisOf(b1, b2){
    var  delta_x = Math.abs(b1.x - b2.x),
       delta_y = Math.abs(b1.y - b2.y);

    return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
  }

  // add balls if there a little balls
  function addBallIfy(){
    if(balls.length < 20){
      balls.push(getRandomBall());
    }
  }

  // Render
  function render(){
    ctx.clearRect(0, 0, can_w, can_h);

    renderBalls();

    renderLines();

    updateBalls();

    addBallIfy();

    window.requestAnimationFrame(render);
  }

  // Init Balls
  function initBalls(num){
    for(var i = 1; i <= num; i++){
      balls.push({
        x: randomSidePos(can_w),
        y: randomSidePos(can_h),
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10)
      });
    }
  }
  // Init Canvas
  function initCanvas(){
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);

    can_w = parseInt(canvas.getAttribute('width'));
    can_h = parseInt(canvas.getAttribute('height'));
  }
  window.addEventListener('resize', function(e){
    console.log('Window Resize...');
    initCanvas();
  });

  function goMovie(){
    initCanvas();
    initBalls(20);
    window.requestAnimationFrame(render);
  }
  goMovie();

  // Mouse effect
  canvas.addEventListener('mouseenter', function(){
    console.log('mouseenter');
    mouse_in = true;
    balls.push(mouse_ball);
  });
  canvas.addEventListener('mouseleave', function(){
    console.log('mouseleave');
    mouse_in = false;
    var new_balls = [];
    Array.prototype.forEach.call(balls, function(b){
      if(!b.hasOwnProperty('type')){
        new_balls.push(b);
      }
    });
    balls = new_balls.slice(0);
  });
  canvas.addEventListener('mousemove', function(e){
    var e = e || window.event;
    mouse_ball.x = e.pageX;
    mouse_ball.y = e.pageY;
    // console.log(mouse_ball);
  });

}, false);


//CHANGE ON SCROLL

/*jQuery(document).ready(function(){

var elementPosition = $('.section2').offset();

$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $('.right').css('right','0');
    $('.lefttext').css('color','var(--color-2)');
    $('.whitebackground').css('background','white');
    $('.whitebackground').css('z-index','-1');
    $('.section1').css('opacity','1');
    $('.sectiontitle').css('z-index','4');
  } else {
    $('.right').css('right','-135px');
    $('.lefttext').css('color','white');
    $('.whitebackground').css('background','rgba(0, 37, 186, 0.3)');
    $('.whitebackground').css('z-index','-1');
    $('.section1').css('opacity','0');
    $('.sectiontitle').css('z-index','-5');
  }
});

});
*/
