var _ = require('lodash');
var randomWords = require('random-words');

class Room {
    constructor(name, user) {
        this.name = name;
        this.author = user;
        this.users = [user];
        this.status = 'OPEN';
    }
}

class User {
    constructor(name, socket) {
        this.name = name;
        this.socket = socket;
    }
}

let service = {
    rooms: [],
    users: [],

    getRoom: (room) => {
        return _.find(service.rooms, {'name': room});
    },

    createRoom: (user) => {
        let room = new Room(randomWords()+Math.round(Math.random()*100), user);
        service.rooms.push(room);
        return room;
    },

    joinRoom: (user, room) => {
        let existingRoom = service.getRoom(room);
        if (existingRoom) {
            existingRoom.users.push(user);
            existingRoom.users = _.uniq(existingRoom.users);
            return {
                result: true,
                games: ['buttons', 'acceleration', 'example'],
                roomDetails: existingRoom
            }
        }
        return {
            result: false
        }
    },

    leaveRoom: (user, room) => {
        let existingRoom = service.getRoom(room);
        if (existingRoom) {
            existingRoom.users = _.difference(existingRoom.users, user);
            return true;
        }
        return false;
    },

    start: (room) => {
        let existingRoom = service.getRoom(room);
        if (existingRoom) {
            existingRoom.status = 'RUNNING';
            return true;
        }
        return false;
    },

    getOpenRooms: () => {
        return _.filter(service.rooms, (room) => { return room.status === 'OPEN'});
    },

    registerUser: (user, socket) => {
        service.users = _.filter(service.users, (u) => { return u.name !== user});
        service.users.push(new User(user, socket));
    }

};

module.exports = service;