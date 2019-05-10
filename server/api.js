var service = require('./service.js');

let api = {
    init: (io) => {
        io.on('connection', function(socket){
            console.log('a user connected');

            socket.on('tweet', function ({text}, fn) {
                fn({received: text});
            });

            socket.on('createRoom', function ({user}, fn) {
                let newRoom = service.createRoom(user);
                fn({room: newRoom.name});
            });

            socket.on('joinRoom', function ({user, room}, fn) {
                fn({result: service.joinRoom(user, room)});
            });

            socket.on('rooms', function ({}, fn) {
                fn(service.getOpenRooms());
            });

            socket.on('disconnect', function(){
                console.log('user disconnected');
            });
        });
    }
};


module.exports = api;