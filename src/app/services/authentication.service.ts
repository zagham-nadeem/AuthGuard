import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);
  user:any;
  constructor() {
    
   }

   isLogin(user:any) {
    this.authState.next(user);
    this.user = user;
    this.isAuthenticated();
   }

  isAuthenticated() {
    return this.user;
  }
}
