import {EventEmitter, Output} from "@angular/core";

export abstract class GameTemplateComponent {
  @Output() gameFinished = new EventEmitter()
}
