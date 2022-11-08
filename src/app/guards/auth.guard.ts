import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      public authenticationService: AuthenticationService
        ) {}

    canActivate(): boolean {
      // This will return only true false
      return this.authenticationService.isAuthenticated();
    }

}