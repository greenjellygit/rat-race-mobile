import { Component, OnDestroy, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";
import * as Shake from 'shake.js';

@Component({
  selector: 'app-accelerate',
  templateUrl: './accelerate.component.html',
  styleUrls: ['./accelerate.component.scss']
})
export class AccelerateComponent extends GameTemplateComponent implements OnInit, OnDestroy {

  shakingTime = 0;
  shakeEvent: Shake;

  constructor() {
    super()
  }

  ngOnInit() {
    if(!("ondevicemotion" in window)){
      this.gameFinished.emit(true);
      return;
    }

    this.shakeEvent = new Shake({threshold: 10, timeout: 200});
    this.shakeEvent.start();
    window.addEventListener('shake', this.shakeCallback, false);
  }

  ngOnDestroy(): void {
    this.shakeEvent.stop();
    window.removeEventListener('shake', this.shakeCallback, false);
  }

  shakeCallback = () => {
    this.shakingTime++;
    if(this.shakingTime > 10) {
      this.gameFinished.emit(true);
    }
  }

}
