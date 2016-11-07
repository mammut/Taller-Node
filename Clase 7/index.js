// Server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
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
