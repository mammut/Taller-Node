// Server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

var chat = io
    .of('chat')
    .on('connection', function (socket) {
        console.log(`${socket.id} se ha conectado`);
        socket.on('msg:new', function(data) {
            chat.emit('msg:created', data);
        });
});
