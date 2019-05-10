import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import * as _ from "lodash";
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-dial-number-game',
  templateUrl: './dial-number-game.component.html',
  styleUrls: ['./dial-number-game.component.scss']
})
export class DialNumberGameComponent extends GameTemplateComponent{

  buttons: Array<number> = _.range(1,10);

  doneDigits: Array<number> = [];
  todoDigits: Array<number> = _.map(_.range(0,9), _.random(1,9));

  constructor(private socket: Socket) {
    super()
  }

  click(digit: number) {
    if (digit === this.todoDigits[0]) {
      this.doneDigits.push(this.todoDigits[0]);
      _.drop(this.todoDigits);

      if(this.todoDigits.length === 0) {
        this.finishGame()
      }
    }
  }

  finishGame() {
    //TODO logic here
  }

}
