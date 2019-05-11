import { Component, OnDestroy, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";
import * as Shake from 'shake.js';

@Component({
  selector: 'app-accelerate',
  templateUrl: './accelerate.component.html',
  styleUrls: ['./accelerate.component.scss']
})
export class AccelerateComponent extends GameTemplateComponent implements OnInit, OnDestroy {
  readonly LIMIT = 10
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

    this.shakeEvent = new Shake({threshold: 150, timeout: 1000});
    this.shakeEvent.start();
    window.addEventListener('shake', this.shakeCallback, false);
  }

  ngOnDestroy(): void {
    this.shakeEvent.stop();
    window.removeEventListener('shake', this.shakeCallback, false);
  }

  shakeCallback = () => {
    this.shakingTime++;
    if(this.shakingTime >= this.LIMIT) {
      this.gameFinished.emit(true);
    }
  }

}
