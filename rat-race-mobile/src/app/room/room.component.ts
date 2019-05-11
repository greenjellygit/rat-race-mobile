import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../common/room.service";
import {RedirectService} from "../common/redirect.service";
import {GameStatus, RoomDetails, RoomJoiningResponse} from "../model/room.model";
import {UserService} from "../common/user.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  _roomDetails$: Subject<RoomJoiningResponse> = new Subject()
  _roomDetails: RoomJoiningResponse
  GameStatus = GameStatus

  constructor(private socket: Socket,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private userService: UserService,
              private redirectService: RedirectService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.roomService.joinRoom(params['id']).subscribe((details) => {
          return this._roomDetails$.next(details)
        }
      )
      this.socket.fromEvent<RoomDetails>('roomDetails').subscribe((details) => {
        if (details) {
          this._roomDetails$.next(
            {
              ...this._roomDetails,
              roomDetails: details
            }
          )
        }
      })
    })
    this._roomDetails$.subscribe((event) => this._roomDetails = event)
  }

  get roomDetails(): RoomJoiningResponse {
    return this._roomDetails
  }

  get userName(): string {
    return this.userService.getUserName()
  }

  private subscribeForRoomChanges() {
    // todo websocket
  }

  private redirectToLandingPage() {
    this.redirectService.redirect('/')
  }

  startGame() {
    this.roomService.startGame(this.roomDetails.roomDetails.name)
  }
}
