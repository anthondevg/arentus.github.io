// script for main Navigation
var navTrigger = document.querySelector('.navTrigger');
var mainList = document.getElementById('mainListDiv');

navTrigger.addEventListener('click',(e)=>{

    navTrigger.classList.toggle('active');

    mainList.classList.toggle('show_list');
});

var links = document.querySelectorAll('.navlinks a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(e){
    console.log('console',e.target)
    navTrigger.classList.toggle('active');
        mainList.classList.toggle('show_list')
    });
}

// custom cursor blend mode

"use strict";

var $bigBall = document.querySelector('.cursor__ball--big');
var $smallBall = document.querySelector('.cursor__ball--small');
var $hoverables = document.querySelectorAll('.hoverable'); // Listeners

document.body.addEventListener('mousemove', onMouseMove);

for (var i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
} // Move the cursor


function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
} // Hover an element


function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 5
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  });
}

anime({
  targets: '.polymorph',
  points: [
    { value: [
      '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
      '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
    },
    { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
    { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
    { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
  ],
  easing: 'easeOutQuad',
  duration: 5000,
  loop: true
});
