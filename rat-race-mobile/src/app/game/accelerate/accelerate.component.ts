import { Component, OnInit } from '@angular/core';
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-accelerate',
  templateUrl: './accelerate.component.html',
  styleUrls: ['./accelerate.component.scss']
})
export class AccelerateComponent extends GameTemplateComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
