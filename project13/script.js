// script.js

// var for buttons
const Stopbutton = document.getElementById('stop');
const Startbutton = document.getElementById('start');
const Pausebutton = document.getElementById('pause');

// var for numbers
let Dhours = document.getElementById('hrs');
let Dmins = document.getElementById('min');
let Dsecs = document.getElementById('sec');

// Initialize time variables
let hrs = 0;
let min = 0;
let sec = 0;
let timer; // Variable to store the interval

Startbutton.addEventListener('click', () => {
    if (!timer) { // Check if the timer is already running
        timer = setInterval(() => {
            sec++;
            if (sec == 60) {
                sec = 0;
                min++;
                if (min == 60) {
                    min = 0;
                    hrs++;
                }
            }
            let hours = hrs < 10 ? '0' + hrs : hrs;
            let mins = min < 10 ? '0' + min : min;
            let secs = sec < 10 ? '0' + sec : sec;

            if (Dhours) Dhours.innerText = `${hours}`;
            if (Dmins) Dmins.innerText = `${mins}`;
            if (Dsecs) Dsecs.innerText = `${secs}`;
        }, 1000);
    }
});

Stopbutton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null; // Reset the timer variable
    // Reset the time variables
    hrs = 0;
    min = 0;
    sec = 0;
    // Update the display
    Dhours.innerText = '00';
    Dmins.innerText = '00';
    Dsecs.innerText = '00';
});

Pausebutton.addEventListener('click', () => {
    clearInterval(timer);
    timer = null; // Reset the timer variable
});
