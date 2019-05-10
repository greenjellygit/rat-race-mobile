import {Injectable} from "@angular/core";
import {Observable, of, Subject} from "rxjs";
import {RoomDetails, RoomJoiningResponse} from "../model/room.model";
import {Socket} from "ngx-socket-io";
import {UserService} from "./user.service";

@Injectable()
export class RoomService {

  constructor(private socket: Socket,
              private userService: UserService) {}

  joinRoom(room: string): Observable<RoomJoiningResponse> {
    const subject: Subject<RoomJoiningResponse> = new Subject()
    this.socket.emit('joinRoom', {user: this.userService.getUserName(), room: room}, (response) => {
      subject.next(response)
    })
    return subject.asObservable()
  }

  startGame(name: string) {
    this.socket.emit('start', {room: name})
  }
}
