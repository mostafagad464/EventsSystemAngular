import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { SpeakerService } from '../_services/speaker.service';
// import { StudentService } from '../_services/student.service';
// import { AdminService } from '../_services/admin.service';
import { UserService } from '../_services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  // constructor(private spkSrv:SpeakerService, private stdSrv:StudentService, private admSrv:AdminService) {}
  constructor(private userSrv:UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const spk = this.spkSrv.speakerValue;
    // const std = this.stdSrv.studentValue;
    // const adm = this.admSrv.adminValue;
    
    const user = this.userSrv.userValue;

    // const spkIsLoggedIn = spk && spk.token;
    // const stdIsLoggedIn = std && std.token;
    // const admIsLoggedIn = adm && adm.token;
    
    const isLoggedIn = user && user.token;

    const isApiUrl = request.url.startsWith("http://localhost:4000");

    if(isLoggedIn && isApiUrl){
      request = request.clone({
        setHeaders:{
          Authorization:`Baarer${user.token}`
        }
      });
    }

    // if(spkIsLoggedIn && isApiUrl){
    //   request = request.clone({
    //     setHeaders:{
    //       Authorization:`Baarer${spk.token}`
    //     }
    //   });
    // }

    // if(stdIsLoggedIn && isApiUrl){
    //   request = request.clone({
    //     setHeaders:{
    //       Authorization:`Baarer${std.token}`
    //     }
    //   });
    // }

    // if(admIsLoggedIn && isApiUrl){
    //   request = request.clone({
    //     setHeaders:{
    //       Authorization:`Baarer${adm.token}`
    //     }
    //   });
    // }

    return next.handle(request);
  }
}
