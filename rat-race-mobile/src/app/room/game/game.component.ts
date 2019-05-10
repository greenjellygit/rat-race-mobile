import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() games: string[]
  private _games: string[]
  private activeGameIndex: number
  private finishedGames: string[]

  constructor() {
  }

  ngOnInit() {
    this._games = this.games.slice().sort(() => Math.random() - 0.5)
    this.activeGameIndex = 0
  }

  isActiveGame(gameId: string) {
    return this._games.indexOf(gameId) === this.activeGameIndex
  }

  gameFinished(gameId: string) {
    this.activeGameIndex++
    this.finishedGames.push(gameId)
  }
}
