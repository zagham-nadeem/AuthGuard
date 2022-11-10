import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  async sendNotification(user:any) {
    const options = {
      url: 'https://onesignal.com/api/v1/notifications',
      headers: { 'Authorization': 'Basic '+ environment.REST_API_KEY,
      'content-type': 'application/json' },
      data: {  
        "included_segments": ["Subscribed Users"],
        "app_id": environment.app_id,
        "contents": {"en": "You Have Successfully Logged out" },
        "headings":{"en":"Hey "+user}      
    },
    readTimeout: 100,
    connectTimeout: 2000
  }
    const response: HttpResponse = await CapacitorHttp.post(options);
  }
}
