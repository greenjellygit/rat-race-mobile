import {Component, Input, OnInit} from '@angular/core';
import {FinishedGame} from "../../game/game.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() games: string[];
  private _games: string[];
  private activeGameIndex: number;
  private finishedGames: FinishedGame[] = [];
  private finished = false;

  constructor() {
  }

  ngOnInit() {
    this._games = this.games.slice().sort(() => Math.random() - 0.5)
    this.activeGameIndex = 0
  }

  isActiveGame(gameId: string) {
    return this._games.indexOf(gameId) === this.activeGameIndex
  }

  gameFinished(finishedGame: FinishedGame) {
    this.activeGameIndex++;
    this.finishedGames.push(finishedGame);
    if (this.finishedGames.length >= this._games.length) {
      this.finished = true;
      this.playApplauseSound()
    } else {
      this.playHappySound();
    }
  }

  playHappySound() {
    let audio = document.createElement("audio");
    audio.src = "assets/next.wav";
    audio.addEventListener("ended", function () {
      document.removeChild(audio);
    }, false);
    audio.play();
  }

  playApplauseSound() {
    let audio = document.createElement("audio");
    audio.src = "assets/applause.wav";
    audio.addEventListener("ended", function () {
      document.removeChild(audio);
    }, false);
    audio.play();
  }
}
