import {Component, OnInit} from '@angular/core';
import {LandingPageService} from "./landing-page.service";
import {UserService} from "../common/user.service";
import {Observable} from "rxjs";
import {Room} from "../model/landing-page.model";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  _rooms: Observable<Room[]>

  constructor(private landingPageService: LandingPageService,
              public userService: UserService) { }

  ngOnInit() {
    this._rooms = this.landingPageService.getRooms()
  }

  createRoom() {
    this.landingPageService.createRoomAndJoin()
  }

  joinRoom(roomName: string) {
    this.landingPageService.joinRoom(roomName)
  }

  get rooms$() {
    return this._rooms
  }

  get user() {
    return this.userService.getUserName()
  }

  set user(user: string) {
    this.userService.setUserName(user)
  }
}
