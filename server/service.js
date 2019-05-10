var _ = require('lodash');
var randomWords = require('random-words');

class Room {
    constructor(name, user) {
        this.name = name;
        this.author = user;
        this.users = [user];
        this.open = true;
    }
}

let service = {
    rooms: [],

    createRoom: (user) => {
        let room = new Room(randomWords()+Math.round(Math.random()*100), user);
        service.rooms.push(room);
        return room;
    },

    joinRoom: (user, room) => {
        let existingRoom = _.find(users, { 'name': room});
        if (existingRoom) {
            existingRoom.users.push(user);
            return true;
        }
        return false;
    },

    getOpenRooms: () => {
        return _.filter(service.rooms, 'open');
    }

};

module.exports = service;