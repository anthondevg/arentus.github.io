//*** Moon/Sun Animation


const sunPath = "M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z";

const moonPath = "M45 75C45 116.421 75 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C75 0 45 33.5786 45 75Z";


const darkMode = document.querySelector('#darkMode');

const header = document.querySelector('.header');

let toggle = false;
let speedText = 750;

darkMode.addEventListener('click', () => {

    toggle = !toggle;

    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    // add different animations to timeline

    timeline.add({
            targets: ".sun",
            d: [
                {
                    value: toggle ? moonPath : sunPath
                }
        ]
        })
        .add({
            targets: '#darkMode',
            rotate: toggle ? 330 : 0
        }, `-= ${speedText}`)
        .add({
            targets: '#mainHeader',
            backgroundColor: toggle ? 'rgb(22,22,42)' : 'rgb(255,255,255)'
        }, `-= ${speedText}`)
        .add({
            targets: '.logo a',
            color: toggle ? 'rgb(255,255,255)' : 'rgb(0,0,0)'
        }, `-= ${speedText}`)
        .add({
            targets: '.navlinks li a',
            color: toggle ? 'rgb(255,255,255)' : 'rgb(0,0,0)'
        }, `-= ${speedText}`)
        .add({
            targets: '.headerCaption',
            color: toggle ? 'rgb(255,255,255)' : 'rgb(0,0,0)'
        }, `-= ${speedText}`)
        .add({
            targets: '.nav',
            backgroundColor: toggle ? 'rgba(22,22,42,.3)' : 'rgb(255,255,255)'
        }, `-= 750`)
        .add({
            targets: '.navTrigger i',
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)'
        }, `-= 350`);

});

// switch toggle









//**** CLOUDS ANIMATION 
var sky = document.getElementsByClassName('back')[0];
screenWidth = window.screen.width,
    boxHeight = window.screen.height,
    clouds = [],
    path = "M107.135,8.127c2.2-5.374,3.422-11.253,3.422-17.419c0-25.415-20.603-46.018-46.018-46.018c-17.446,0-32.622,9.708-40.426,24.017c-3.559-1.221-7.372-1.893-11.344-1.893c-5.978,0-11.604,1.503-16.524,4.148c-6.439-5.353-14.714-8.573-23.742-8.573c-18.438,0-33.731,13.428-36.656,31.037c-4.543-4.418-10.741-7.144-17.578-7.144c-12.732,0-23.255,9.436-24.971,21.695c-9.527,3.3-16.37,12.346-16.37,22.995c0,13.441,10.896,24.336,24.336,24.336v0H98.734c13.44,0,24.337-10.896,24.337-24.337C123.071,20.485,116.436,11.548,107.135,8.127z";

var cloud = function (screenWidth, boxHeight) {
    
    var yPos = Math.random() * boxHeight,
        xPos = Math.random() * screenWidth,
        speed = Math.random(),
        direction = Math.random(),
        scale = speed,
        scaleString = 'scale(' + scale + ' ' + scale + ')',
        opacity = scale;



    var cloud = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //create SVG

    cloud.setAttribute('d', path); //set path
    cloud.setAttribute('fill', "whitesmoke"); //color
    cloud.setAttribute('fill-opacity', opacity);

    if (direction > 0.5) { //set random direction
        speed = -speed;
    }

    sky.appendChild(cloud); //put clouds in the sky

    this.animate = function () { //animation method
        cloud.setAttribute('transform', 'translate(' + (xPos += speed) + ',' + yPos + ')' + scaleString);
        if (xPos > screenWidth + 200) {
            xPos = -200;
            yPos = Math.random() * boxHeight;
        }
        if (xPos < -200) {
            xPos = screenWidth + 200;
            yPos = Math.random() * boxHeight;
        }
    };
};

var createClouds = function (quantity) {
    for (var i = 0; i < quantity; i++) { //create clouds and put them inside array
        clouds.push(new cloud(screenWidth, boxHeight));
    }
};



var render = function () { //call the animate method from each cloud and control flow with requestAnimationFrame
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].animate();

    }
    requestAnimationFrame(render);
};

/*
createClouds(10);
render();*/
