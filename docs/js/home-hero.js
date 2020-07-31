let bg = document.getElementById('hero-bg');
let planet = document.getElementById('hero-planet');
let mountain = document.getElementById('hero-mountain');
let text = document.getElementById('hero-text');

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = -value * 0.2 + 'px';
    planet.style.left = -value * 0.5 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    text.style.top = value + 'px';   


})