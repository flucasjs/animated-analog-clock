"use strict";
initLocalClocks();


// Starts any clocks using the user's local time

function initLocalClocks() {
    // Get the local time using JS
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    // Create an object with each hand and it's angle in degrees
    let hands = [
        {
            // Each hour is seperated by 30deg.
            // When the hour hand is between two numbers,
            // the minute hand takes twice as long to do a full rotation
            // so add this amount to the deg.
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minutes',
            angle: (minutes * 6)
        },
        {
            hand: 'seconds',
            angle: (seconds * 6)
        }
    ];

    // Loop through each of these hands to set their angle

    for (let j = 0; j < hands.length; j++) {
        let elements = document.querySelectorAll('.' + hands[j].hand);
        for(let k = 0; k < elements.length; k++) {
            elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
            // If this is a minute hand, note the seconds position
            if (hands[j].hand === 'minutes') {
                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
    }
}

