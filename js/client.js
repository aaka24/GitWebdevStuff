// let Client = {};
// Client.socket = io.connect();

// Client.askNewPlayer = function(){
//     Client.socket.emit('newplayer');
// };

const socket = io()

function askNewPlayer() {
    socket.emit("newPlayer");
}

askNewPlayer()