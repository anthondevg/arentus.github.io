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