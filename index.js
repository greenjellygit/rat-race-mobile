var PORT = 3000;

var express = require('express');
var path = require('path');
var routes = require('./routes/index');

var app = express();
app.use('/', express.static(path.join(__dirname, 'app')));
var server = require('http').Server(app);


var io = require('socket.io')(server);


server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
io.on('connection', function(socket){
    console.log('a user connected');
});