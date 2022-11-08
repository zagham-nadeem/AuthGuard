import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public authenticationService: AuthenticationService, public router: Router ) {}

  initializeApp() {


      const x = this.authenticationService.isAuthenticated(); 
        console.log(x)
        if (x) {
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['home']);
        }

    }
}
