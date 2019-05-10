import {Injectable} from "@angular/core";
import {Observable, of, Subscription} from "rxjs";
import {Room, RoomCreationRequest} from "../model/landing-page.model";
import {RedirectService} from "../common/redirect.service";
import {UserService} from "../common/user.service";

@Injectable()
export class LandingPageService {

  constructor(private redirectService: RedirectService, private userService: UserService) {}

  createRoomAndJoin(): void {
    let request: RoomCreationRequest = new RoomCreationRequest();
    request.user = this.userService.getUserName();

    this.requestRoomCreation(request).subscribe(roomName => {
      this.joinRoom(roomName)
    })
  }

  joinRoom(roomName: string): void {
    this.redirectService.redirect('/room/' + roomName)
  }

  private requestRoomCreation(request: RoomCreationRequest): Observable<string> {
    // tutaj sie podepnij httclientem - twortzenie pokoju
    return of('ptak69')
  }

  getRooms(): Observable<Room[]> {
    // tutaj sie podepnij httclientem - pobierranie listy poikoi
    return of(
      [
        {
          name: 'Pokoj1',
          playersCount: 3,
          authorName: 'Autor1'
        },
        {
          name: 'Pokoj2',
          playersCount: 5,
          authorName: 'Autor2'
        }
      ]
    )
  }
}
