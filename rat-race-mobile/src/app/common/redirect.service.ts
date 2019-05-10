import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class RedirectService {

  constructor(private router: Router) {

  }

  redirect(url: string) {
    this.router.navigate([url])
  }
}
