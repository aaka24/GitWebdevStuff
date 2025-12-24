const black = document.getElementById('black');
const white = document.getElementById('white');
const board = document.getElementById('board');
// const style1 = window.getComputedStyle(board);
// const currentX = parseFloat(style1.getPropertyValue('width')); // number only
// console.log(currentX);
board.addEventListener('click', () => board.focus());

board.addEventListener('keydown', (e) => {
    e.preventDefault()
    console.log(e.key);
    const style = window.getComputedStyle(white);
    const currentX = parseFloat(style.getPropertyValue('--x')); // number only
    const currentY = parseFloat(style.getPropertyValue('--y')); // number only
    // if (currentX <= 83.5 && currentX >= 17) {
        if (e.key === 'a') {
            white.style.setProperty('--x', `${currentX - 9.5}%`);
            console.log(currentX);
            
        }
        else if (e.key === 'd') {
            white.style.setProperty('--x', `${currentX + 9.5}%`);
            console.log(currentX);
            
        }
        else if (e.key === 'w') {
            white.style.setProperty('--y', `${currentY - 10}%`);
            console.log(currentY);
            
        }
        else if (e.key === 's') {
            white.style.setProperty('--y', `${currentY + 10}%`);
            console.log(currentY);
            
        }
        
    // }
})


black.addEventListener('click', (e) => {
    e.preventDefault();

    const style = window.getComputedStyle(black);
    const currentX = parseFloat(style.getPropertyValue('--x')); // number only

    black.style.setProperty('--x', `${currentX - 10}%`);
});

white.addEventListener('click', (e) => {
    e.preventDefault();

});
