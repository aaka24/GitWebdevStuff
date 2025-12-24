const black = document.getElementById('black');
const white = document.getElementById('white');
const board = document.getElementById('board');
const socket = io()
board.addEventListener('click', () => board.focus());
function askNewPlayer() {
    socket.emit("newPlayer");
}
askNewPlayer()
socket.on('playerAssigned', (player) => {
    socket.player = player; // store locally
    console.log("I am:", player.color);
});

// board.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(socket.player);
    
// })
board.addEventListener('keydown', (e) => {

    e.preventDefault()
    const move = {
        color: socket.player.color,
        key : e.key
    };

    socket.emit('move', move);

})

socket.on('playerMove', (data) => {
    const item = document.getElementById(data.color);
    const style = getComputedStyle(item);

    let x = parseFloat(style.getPropertyValue('--x'));
    let y = parseFloat(style.getPropertyValue('--y'));

    if (data.key === 'a') x -= 9.5;
    if (data.key === 'd') x += 9.5;
    if (data.key === 'w') y -= 10;
    if (data.key === 's') y += 10;

    item.style.setProperty('--x', `${x}%`);
    item.style.setProperty('--y', `${y}%`);
});