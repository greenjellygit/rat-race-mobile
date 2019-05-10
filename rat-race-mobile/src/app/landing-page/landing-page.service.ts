import {Injectable} from "@angular/core";
import {Observable, of, Subject, Subscription} from "rxjs";
import {Room, RoomCreationRequest, RoomsResponse} from "../model/landing-page.model";
import {RedirectService} from "../common/redirect.service";
import {UserService} from "../common/user.service";
import {Socket} from 'ngx-socket-io';

@Injectable()
export class LandingPageService {

  constructor(private redirectService: RedirectService,
              private userService: UserService,
              private socket: Socket) {
  }

  createRoomAndJoin(): void {
    this.requestRoomCreation({user: this.userService.getUserName()}).subscribe(roomName => {
      this.joinRoom(roomName)
    })
  }

  joinRoom(roomName: string): void {
    this.redirectService.redirect('/room/' + roomName)
  }

  private requestRoomCreation(request: RoomCreationRequest): Observable<string> {
    let subject: Subject<string> = new Subject();
    this.socket.emit('createRoom', request, (result: { room: string }) => {
      subject.next(result.room);
    });
    return subject.asObservable();
  }

  getRooms(): Observable<Room[]> {
    const subject: Subject<Room[]> = new Subject()
    this.socket.emit('rooms', {}, (response: RoomsResponse) => {
      subject.next(response.rooms)
    })
    return subject.asObservable()
  }
}
