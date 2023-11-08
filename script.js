let snake = document.querySelector('#snake');
let btns = document.querySelectorAll('div#btns p');
let position = 0;

let clickedBtn = '';

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        clickedBtn = btn.id;

    });
});


setInterval(() => {
    switch (clickedBtn) {
        case 'right':
           move('marginLeft', 10);
          break;
        case 'left':
           move('marginLeft', -10);
          break;
        case 'down':
           move('marginTop', 10);
          break;
        case 'up':
           move('marginTop', -10);
          break;
    }
    
}, 500);


function move(index, speed) {
    if ( position > 260 || position < 0 ){
        position = 0; 
        clickedBtn = '';
    } else {
        position += speed;
    }
    snake.style[index] = `${position}px`;
}
