import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import * as _ from "lodash";

@Component({
  selector: 'app-dial-number-game',
  templateUrl: './dial-number-game.component.html',
  styleUrls: ['./dial-number-game.component.scss']
})
export class DialNumberGameComponent {

  buttons: Array<number> = _.range(1,10)

  constructor(private socket: Socket) { }

}
