import { Component, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-dont-press-me',
  templateUrl: './dont-press-me.component.html',
  styleUrls: ['./dont-press-me.component.scss']
})
export class DontPressMeComponent extends GameTemplateComponent implements OnInit {

  secondsLeft: number

  constructor() {
    super()
  }

  ngOnInit() {
    this.secondsLeft = 5
    setInterval(() => {
      this.secondsLeft--
      if(this.secondsLeft === 0) {
        this.gameFinished.emit(true)
      }
    }, 1000)
  }

  buttonPressed() {
    this.secondsLeft += 5
  }
}
