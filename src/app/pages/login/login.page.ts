import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public authService: AuthenticationService, public router: Router ) { }

  ngOnInit() {
  }
  Login() {
    this.authService.isLogin(false);
    this.router.navigate(['home']);

  }
}
