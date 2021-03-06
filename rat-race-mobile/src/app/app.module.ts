import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RoomComponent} from './room/room.component';
import {LandingPageService} from "./landing-page/landing-page.service";
import {RedirectService} from "./common/redirect.service";
import {UserService} from "./common/user.service";
import {FormsModule} from "@angular/forms";
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {DialNumberGameComponent} from './game/dial-number/dial-number-game.component';
import {RoomService} from "./common/room.service";
import {GameComponent} from './room/game/game.component';
import {ClapMosquitoComponent} from "./game/clap-mosquito/clap-mosquito.component";
import {MosquitoComponent} from './game/clap-mosquito/mosquito/mosquito.component';
import {DontPressMeComponent} from './game/dont-press-me/dont-press-me.component';
import {AccelerateComponent} from './game/accelerate/accelerate.component';
import {PressMeComponent} from './game/press-me/press-me.component';
import {ColorfulHitComponent} from './game/colorfull-hit/colorful-hit.component';
import { LlamasComponent } from './game/llamas/llamas.component';

const HEROKU_IP = 'https://rat-race-mobile.herokuapp.com';
const LOCAL_IP = 'localhost:3000';

const config: SocketIoConfig = { url: HEROKU_IP, options: {} };

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
    PressMeComponent,
    GameComponent,
    ClapMosquitoComponent,
    MosquitoComponent,
    PressMeComponent,
    ColorfulHitComponent,
    AccelerateComponent,
    LlamasComponent
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
export class AppModule {
}
