import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";

import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
