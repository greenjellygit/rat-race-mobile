import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomDetails: Observable<any> = this.socket.fromEvent<string[]>('roomDetails');

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.roomDetails.subscribe((data) => {
      console.log(`Details ${JSON.stringify(data)}`);
    });
  }

}
