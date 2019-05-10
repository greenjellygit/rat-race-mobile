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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LandingPageService, RedirectService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
