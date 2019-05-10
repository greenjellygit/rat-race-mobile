var service = require('./service.js');

let api = {
    init: (io) => {
        io.on('connection', function(socket){
            console.log('a user connected');

            socket.on('tweet', function ({text}, fn) {
                fn({received: text});
            });

            socket.on('createRoom', function ({user}, fn) {
                service.registerUser(user, socket);
                let newRoom = service.createRoom(user);
                fn({room: newRoom.name});
                api.emitRoomDetails(newRoom.name);
            });

            socket.on('joinRoom', function ({user, room}, fn) {
                service.registerUser(user, socket);
                fn(service.joinRoom(user, room));
                api.emitRoomDetails(room);
            });

            socket.on('rooms', function ({}, fn) {
                fn({'rooms': service.getOpenRooms()});
            });

            socket.on('disconnect', function(){
                console.log('user disconnected');
            });
        });
    },
    emitRoomDetails: ({room}) => {
        let userNames = service.getRoom(room).users;
        let users = _.filter(service.users, (u) => {return _.some(userNames, u.name);});
        _.each(users, u => {
            u.socket.emit('roomDetails', service.getRoom(room));
        })
    }
};


module.exports = api;