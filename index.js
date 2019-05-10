var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var api = require('./server/api.js');

// to use later
// app.use(exp.static('resources'));

app.get('/', function(req, res){
  res.sendfile('server/test/index.html');
});

api.init(io);

http.listen(3000, function(){
  console.log('listening on *:3000');
});