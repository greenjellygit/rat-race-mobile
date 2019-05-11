import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SnakeComponent} from "./snake/snake.component";
import {GameTemplateComponent} from "../game-template.component";

@Component({
  selector: 'app-nasty-snake',
  templateUrl: './nasty-snake.component.html',
  styleUrls: ['./nasty-snake.component.scss']
})
export class NastySnakeComponent extends GameTemplateComponent implements OnInit, AfterViewInit {

  snakes = [];
  snakeElements: SnakeComponent[] = [];
  handVisible = false;
  snakeSequence = 0;
  clapSound: any;

  @ViewChild('hand') hand: ElementRef;
  @ViewChildren(SnakeComponent) snakeList: QueryList<SnakeComponent>;

  @HostListener('touchstart', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  asd(e: MouseEvent) {
    this.calculateHandPosition(e);
    let sound = this.clapSound.cloneNode();
    sound.volume = 0.2;
    sound.play();
    this.handVisible = true;
  }

  @HostListener('touchend', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  zxc(e: MouseEvent) {
    this.calculateHandPosition(e);
    this.handVisible = false;
  }

  ngOnInit() {
    this.clapSound = new Audio();
    this.clapSound.volume = 0.2;
    this.clapSound.src = "../../../assets/clap.mp3";
    this.clapSound.load();
    for (let i = 0; i < 10; i++) {
      this.snakes.push(this.generateRandomPosition());
    }
  }

  private calculateHandPosition(e: MouseEvent) {
    if (e.target['className'] == 'snake') {
      this.hand.nativeElement.style.left = e.target['style'].left;
      this.hand.nativeElement.style.top = e.target['style'].top;
      let clickedElem: SnakeComponent = this.findElementById(e.target['id']);
      clickedElem.kill();
      this.checkGameFinished();
    } else if (e.target['className'] == 'blood') {
      this.hand.nativeElement.style.left = e.target['style'].left;
      this.hand.nativeElement.style.top = e.target['style'].top;
    } else {
      this.hand.nativeElement.style.left = e.layerX + "px";
      this.hand.nativeElement.style.top = e.layerY + "px";
    }
  }

  ngAfterViewInit(): void {
    this.snakeList.forEach(snake => {
      this.snakeElements.push(snake);
    });
  }

  generateRandomPosition() {
    return {
      left: this.getRandomArbitrary(0, 500),
      top: this.getRandomArbitrary(0, 800),
      id: this.snakeSequence++
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  findElementById(snakeId) {
    return this.snakeElements.find(e => e.initialPos.id == snakeId)
  }

  private checkGameFinished() {
    if (this.snakeElements.every((e: SnakeComponent) => e.isKilled == true)) {
      this.gameFinished.emit(true);
    }
  }
}
