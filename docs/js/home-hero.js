let bg = document.getElementById('hero-bg');
let planet = document.getElementById('hero-planet');
let mountain_back = document.getElementById('hero-mountain-back');
let mountain_middle = document.getElementById('hero-mountain-middle');
let mountain_front = document.getElementById('hero-mountain-front');
let text = document.getElementById('hero-text');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    
    // background
    bg.style.top = -value * 0.5 + 'px';
    // planet
    planet.style.left = -value * 0.5 + 'px';
    planet.style.top = value * 0.8 + 'px';
    // mountains
    mountain_back.style.top = value * 0.2 + 'px';
    mountain_middle.style.top = value * 0.1 + 'px';
    // mountain_front.style.top = -value * 0.3 + 'px';
    // text
    text.style.top = value + 'px';   


})