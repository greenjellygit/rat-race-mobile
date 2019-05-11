import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomComponent} from "./room/room.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {NastySnakeComponent} from "./game/nasty-snake/nasty-snake.component";

const routes: Routes = [
  {
    path: 'room/:id',
    component: RoomComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'snake',
    component: NastySnakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
