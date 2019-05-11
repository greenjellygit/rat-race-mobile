import { Component, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-press-me',
  templateUrl: './press-me.component.html',
  styleUrls: ['./press-me.component.scss']
})
export class PressMeComponent extends GameTemplateComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

  buttonPressed() {
    this.gameFinished.emit(true)
  }
}
