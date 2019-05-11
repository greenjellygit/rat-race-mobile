import { Component, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-colorful-hit',
  templateUrl: './colorful-hit.component.html',
  styleUrls: ['./colorful-hit.component.scss']
})
export class ColorfulHitComponent extends GameTemplateComponent implements OnInit {

  actualColor: Colors
  actualColorIndex = 0
  private colorsArray = ['GREEN', 'RED', 'YELLOW', 'BLUE']

  constructor() {
    super()
  }

  ngOnInit() {
    setInterval(() => this.actualColor = Colors[this.colorsArray[(this.actualColorIndex++)%4]], 700)
  }

  buttonPressed(actualColor: Colors) {
    if(actualColor === Colors.RED) {
      this.gameFinished.emit(true)
    }
  }
}

export enum Colors {
  GREEN='GREEN',
  RED='RED',
  YELLOW='YELLOW',
  BLUE='BLUE'
}
