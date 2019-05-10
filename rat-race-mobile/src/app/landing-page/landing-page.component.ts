import {Component, OnInit} from '@angular/core';
import {LandingPageService} from "./landing-page.service";
import {UserService} from "../common/user.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private landingPageService: LandingPageService,
              public userService: UserService) { }

  ngOnInit() {

  }

  createRoom() {
    this.landingPageService.createRoomAndJoin()
  }

  joinRoom(roomName: string) {
    this.landingPageService.joinRoom(roomName)
  }

  get rooms$() {
    return this.landingPageService.getRooms()
  }

  get user() {
    return this.userService.getUserName()
  }

  set user(user: string) {
    this.userService.setUserName(user)
  }
}
