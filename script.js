const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');
const { createServer } = require('node:http');
const server = createServer(app);
const { Server } = require("socket.io");
// console.log(Server);
app.use('/',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded( {extended : true}));
app.get('/', (req, res) => {
    res.send(req)
})
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`socket ${socket.id} connected`);
    // socket.on("chatSent", (msg) => {
    //     console.log("Message: " + msg);
    //     io.emit('chatSent', msg);
    // })
    socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});