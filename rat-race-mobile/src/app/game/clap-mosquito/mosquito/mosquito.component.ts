import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './mosquito.component.html',
  styleUrls: ['./mosquito.component.scss']
})
export class MosquitoComponent implements AfterViewInit, OnInit {

  @Input() initialPos: any;
  @ViewChild('enemyPlayer') enemyPlayer: ElementRef;
  @ViewChild('blood') blood: ElementRef;
  intervalHandler: any;
  isKilled = false;
  @Input() screenBounds: any;

  deadSound: any;

  constructor() { }

  ngOnInit(): void {
    this.deadSound = new Audio();
    this.deadSound.src = "../../../assets/splack.mp3";
    this.deadSound.volume = 1;
    this.deadSound.load();
  }

  ngAfterViewInit(): void {
    this.enemyPlayer.nativeElement.style.left = this.initialPos.left + 'px';
    this.enemyPlayer.nativeElement.style.top = this.initialPos.top + 'px';

    const allMoves = [this.moveLeft, this.moveRight, this.moveDown, this.moveUp];
    const enemyMoves = [];

    let nextStep = () => {
      let currentMove = this.prepareNextStep(allMoves, enemyMoves);
      this.enemyPlayer.nativeElement.style.left = currentMove.left;
      this.enemyPlayer.nativeElement.style.top = currentMove.top;
      enemyMoves.push(currentMove);
    };

    this.intervalHandler = window.setInterval(nextStep.bind(this), 100);
  }

  private prepareNextStep(allMoves, enemyMoves) {
    let currentMove: any;
    let blockCounter = 0;
    do {
      currentMove = this.getRandomElement(allMoves)(this.enemyPlayer.nativeElement);
      blockCounter++;
    } while ((this.isMoveAlreadySet(currentMove, enemyMoves)) && blockCounter < 50 || this.isMoveOnBorder(currentMove));
    return currentMove;
  }

  moveLeft(player) {
    let currentLeft = parseInt(player.style.left.split('px')[0]);
    return {top: player.style.top, left: (currentLeft - 20) + "px"}
  }

  moveRight(player) {
    let currentLeft = parseInt(player.style.left.split('px')[0]);
    return {top: player.style.top, left: (currentLeft + 20) + "px"}
  }

  moveUp(player) {
    let currentTop = parseInt(player.style.top.split('px')[0]);
    return {top: (currentTop - 20) + "px", left: player.style.left}
  }

  moveDown(player) {
    let currentTop = parseInt(player.style.top.split('px')[0]);
    return {top: (currentTop + 20) + "px", left: player.style.left}
  }

  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  isMoveAlreadySet(move, moveArray) {
    return moveArray.find(e => e.top == move.top && e.left == move.left)
  }

  private isMoveOnBorder(currentMove) {
    let top = parseInt(currentMove.top.split('px')[0]);
    let left = parseInt(currentMove.left.split('px')[0]);
    return top < 0 || top > this.screenBounds.height || left < 0 || left > this.screenBounds.width;
  }

  kill() {
    this.isKilled = true;
    this.blood.nativeElement.style.left = this.enemyPlayer.nativeElement.style.left;
    this.blood.nativeElement.style.top = this.enemyPlayer.nativeElement.style.top;
    this.deadSound.play();
  }
}
