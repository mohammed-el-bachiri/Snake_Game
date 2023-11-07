let snake = document.querySelector('#snake');
let btns = document.querySelectorAll('div#btns p');
let left = document.querySelectorAll('#left');
let position = 0;

setInterval(() => {
    if (position > 268) {
        position = 0;
    } else {
        position += 5.19;
    }
    left.addev
    snake.style.top = `${position}px`
}, 200);