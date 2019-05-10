var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(exp.static('resources'));

app.get('/', function(req, res){
  res.sendfile('test/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('tweet', function (name, fn) {
    fn(name + ' says ');
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});