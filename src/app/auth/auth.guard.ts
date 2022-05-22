import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private router: Router,
  //   private spkSrv: SpeakerService, private stdSrv: StudentService,
  //   private admSrv:AdminService
  // ) {}

  constructor(private router: Router, private userSrv: UserService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)//: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    // const speaker = this.spkSrv.speakerValue;
    // const student = this.stdSrv.studentValue;
    // const admin = this.admSrv.adminValue;
    
    const user = this.userSrv.userValue;
    
    // if(user){
    if(user!=null && user.isLogged==true){
    // if(this.userSrv.userValue.isLogged==true){
      console.log("User Authonticated");
      console.log(user);
      // console.log(user.isLogged);
      return true;
    }
    console.log("User Not Authonticated");
    console.log(user);
    // console.log(user.isLogged);
    // if (speaker) {
    //   return true;
    // }
    // if (student) {
    //   return true;
    // }
    // if (admin) {
    //   return true;
    // }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
