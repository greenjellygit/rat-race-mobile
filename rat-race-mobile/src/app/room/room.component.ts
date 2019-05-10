import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
import {RoomService} from "../common/room.service";
import {RedirectService} from "../common/redirect.service";
import {RoomDetails, RoomJoiningResponse} from "../model/room.model";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  _roomDetails$: Subject<RoomJoiningResponse> = new Subject()
  _roomDetails: RoomJoiningResponse

  constructor(private socket: Socket,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private redirectService: RedirectService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.roomService.joinRoom(params['id']).subscribe( (details) =>
        {
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

  private subscribeForRoomChanges() {
    // todo websocket
  }

  private redirectToLandingPage() {
    this.redirectService.redirect('/')
  }
}
