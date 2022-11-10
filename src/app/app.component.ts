import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import OneSignal from "onesignal-cordova-plugin";
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( public authenticationService: AuthenticationService, public router: Router, platform: Platform  ) {
  
    platform.ready().then(() => {
      this.OneSignalInit();
    });
  }
  initializeApp() {


      const x = this.authenticationService.isAuthenticated(); 
        console.log(x)
        if (x) {
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['home']);
        }

    }
    OneSignalInit() {
      OneSignal.setAppId('a76ebbb0-c835-4258-8810-ef0003b75634');
      OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      });
    }
}
