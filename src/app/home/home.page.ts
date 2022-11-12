import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public authService: AuthenticationService, public router: Router, public http: HttpService ) {}

  logout() {
    // Conditionn
    this.authService.isLogin(true);
    this.http.sendNotification('Zagham Nadeem');
    this.router.navigate(['login']);
  }
}
