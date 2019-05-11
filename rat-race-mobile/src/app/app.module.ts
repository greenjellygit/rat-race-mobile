import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoomComponent } from './room/room.component';
import {LandingPageService} from "./landing-page/landing-page.service";
import {RedirectService} from "./common/redirect.service";
import {UserService} from "./common/user.service";
import {FormsModule} from "@angular/forms";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DialNumberGameComponent } from './game/dial-number/dial-number-game.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import {RoomService} from "./common/room.service";
import { GameComponent } from './room/game/game.component';
import { DontPressMeComponent } from './game/dont-press-me/dont-press-me.component';
import { AccelerateComponent } from './game/accelerate/accelerate.component';
import { PressMeComponent } from './game/press-me/press-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RoomComponent,
    DialNumberGameComponent,
    DontPressMeComponent,
    GameComponent,
    DontPressMeComponent,
    AccelerateComponent,
    PressMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [LandingPageService, RedirectService, UserService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
