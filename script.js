let express = require('express');
let app = express();
let { createServer } = require('node:http');
let server = createServer(app);
let { Server } = require("socket.io");
//installed what's necessary
let io = new Server(server);
let lastId = 0;

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));
//delivery of the files
// serve static files such as CSS style sheets or game assets that won’t be accessible 
// directly but need to be accessed by your game

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
//root page

server.listen(4444,function(){ // Listens to port 4444
    console.log('Listening on '+server.address().port);
});
//server listening


io.on("connection", (socket) => {
    console.log(socket);
    console.log(`socket ${socket.id} connected`);
    console.log(lastId);
    
    io.on("newPlayer", () => {
        console.log(`Hello World`);
        if (lastId == 0) {
            socket.player = {
                color: "white"
            }
        }
        else {
            socket.player = {
                color: "black"
            } 
        }
    })
    // console.log(io);
    lastId++;
    
    socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});