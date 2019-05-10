var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var api = require('./server/api.js');

// to use later
app.use('/', exp.static('rat-race-mobile/dist/rat-race-mobile'));

/*app.get('/', function(req, res){
  res.sendfile('rat-race-mobile/dist/rat-race-mobile/index.html');
});*/

app.get('/test', function(req, res){
  res.sendfile('server/test/index.html');
});

api.init(io);

http.listen(3000, function(){
  console.log('listening on *:3000');
});