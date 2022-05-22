import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SpeakerService } from '../_services/speaker.service';
import { StudentService } from '../_services/student.service';
import { AdminService } from '../_services/admin.service';
import { UserService } from '../_services/user.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  // constructor(private spkSrv:SpeakerService, private stdSrv:StudentService, private admSrv:AdminService) {}
  constructor(private userSrv:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err=>{
      
      if([401,403].includes(err.status) && this.userSrv.userValue){
        this.userSrv.logout();
      }

      // if([401,403].includes(err.status) && this.spkSrv.speakerValue){
      //   this.spkSrv.logout();
      // }
      // if([401,403].includes(err.status) && this.spkSrv.speakerValue){
      //   this.spkSrv.logout();
      // }
      // if([401,403].includes(err.status) && this.spkSrv.speakerValue){
      //   this.spkSrv.logout();
      // }

      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(error);
    }))
  }
}
