const toggle = document.querySelector('.daynight');
const lightmode = document.querySelector('.light');
const darkmode = document.querySelector('.night');

const body = document.body;

const wrap = document.getElementById('wrap');

const card = document.querySelectorAll('.card-body');
const input  = document.querySelectorAll('input');


const HIDDEN_CLASS = 'hidden';
const DARK = 'dark';

function dayNight () {
    if (darkmode.classList.contains(HIDDEN_CLASS)) {
        lightmode.classList.add(HIDDEN_CLASS);
        darkmode.classList.remove(HIDDEN_CLASS);
        wrap.classList.add(DARK);
        card.forEach(e =>{
            e.classList.add(DARK);
        });
        input.forEach(e =>{
            e.style.color = "white";
            e.style.backgroundColor = "rgba(0,0,0,0.7)"
        })
        

    } else{
        darkmode.classList.add(HIDDEN_CLASS);
        lightmode.classList.remove(HIDDEN_CLASS);
        wrap.classList.remove(DARK);
        card.forEach(e =>{
            e.classList.remove(DARK);
        });
        input.forEach(e =>{
            e.style.color = "black";
            e.style.backgroundColor = "white"
        });
        
    }
}
toggle.addEventListener('click', dayNight);