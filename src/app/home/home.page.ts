import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public authService: AuthenticationService, public router: Router ) {}

  logout() {
    // Conditionn
    this.authService.isLogin(true);
    this.router.navigate(['login']);
  }
}
