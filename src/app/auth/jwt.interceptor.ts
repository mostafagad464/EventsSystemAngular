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
    

    // const isApiUrl = request.url.startsWith("http://localhost:8080");
    // alert ("Inside JWT Inseptor");

    // if(isLoggedIn && isApiUrl){
    if(isLoggedIn){
    // if(user.isLogged){
      // request.headers.append("Authorization",`Baarer${user.token}`);
      request = request.clone({
        headers:request.headers.set("Authorization",`Baarer ${user.token}`)

        // headers:{
        //   `Baarer ${user.token}`
        // },
        // Authorization:`Baarer ${user.token}`
        // setHeaders:{
        //   Authorization:`Baarer ${user.token}`
        //   // Authorization:user.token
        // }
      });
      console.log(`Baarer ${user.token}`);
      console.log(request);
      console.log(request.headers);

      // alert ("Inside JWT Condition");

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
