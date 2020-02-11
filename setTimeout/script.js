// function sayHello() {
//     console.log('Hello!');
// }

// let delay = 3000;

// let timerId = setTimeout(sayHello, delay);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, delay);
// clearTimeout(timerId);

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn');
elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);