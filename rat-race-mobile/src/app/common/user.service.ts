import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  private userName: string

  setUserName(user: string) {
    this.userName = user
  }

  getUserName() {
    return this.userName
  }
}
