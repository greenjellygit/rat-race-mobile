import { Component, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-dont-press-me',
  templateUrl: './dont-press-me.component.html',
  styleUrls: ['./dont-press-me.component.scss']
})
export class DontPressMeComponent extends GameTemplateComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
    setTimeout(() => this.gameFinished.emit(true), 5000)
  }

  buttonPressed() {
    this.gameFinished.emit(false)
  }
}
