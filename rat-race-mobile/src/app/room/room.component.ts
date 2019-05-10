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

  _roomDetails: Subject<RoomDetails> = new Subject()

  constructor(private socket: Socket,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private redirectService: RedirectService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.roomService.joinRoom(params['id']).subscribe( (details) =>
        {
          console.log(details)
          return this._roomDetails.next(details.roomDetails)
        }
      )
      this.socket.fromEvent<RoomDetails>('roomDetails').subscribe((details) => {
        console.log(details)
        if (details) {
          this._roomDetails.next(details)
        }
      })
    })
  }

  get roomDetails(): Observable<RoomDetails> {
    return this._roomDetails.asObservable()
  }

  private subscribeForRoomChanges() {
    // todo websocket
  }

  private redirectToLandingPage() {
    this.redirectService.redirect('/')
  }
}
