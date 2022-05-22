import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { User } from '../_models/user';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/";

  usr: User = new User();

  flag = false;


  // private userSubject:BehaviorSubject<Student | null>;
  // private userSubject:BehaviorSubject<User>;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  // std:Student =new Student(0,"","","","",0,"");

  constructor(private http: HttpClient, private router: Router, private logSrv: LoginService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();

  }


  public get userValue(): User {
    return this.userSubject.value;
  }

  // login(emial: string, password: string) {
  login(req: object) {
    return this.http.post<any>(this.baseUrl + "login", req)
      .pipe(map(s => {
        // console.log(std);
        // console.log(std.token);
        // console.log(std.role);
        if ((s.role) != "admin") {
          this.usr._id = s.data._id;
          this.usr.name = s.data.name;
          this.usr.age = s.data.age;
          this.usr.bio = s.data.bio;
          this.usr.email = s.data.email;
          this.usr.username = s.data.username;
          this.usr.password = s.data.password;
          this.usr.role = s.role;
          this.usr.token = s.token;
        }
        else
        {
          this.usr = s;
        }
        

        // s.isLogged=true;
        this.usr.isLogged = true;


        // localStorage.setItem('user', JSON.stringify(s));
        localStorage.setItem('user', JSON.stringify(this.usr));

        // this.userValue.isLogged=true;
        // this.userSubject.value.isLogged=true;

        // this.userSubject.next(s);
        this.userSubject.next(this.usr);

        // return s;
        return this.usr;
      }))
  }

  // u:User = null!;
  logout() {
    // localStorage.removeItem('student');
    localStorage.removeItem('user');
    // this.userValue.isLogged=false;
    // this.userSubject.value.isLogged=false;
    // this.userSubject.next(new User());
    // console.log(this.u);

    this.userSubject.next(null!);
    this.router.navigate(['/login']);
  }

  register(user: User) {
    return this.http.post(this.baseUrl + "register", user)
  }

  // profile(){

  // }


  // registration(std:Student, spk:Speaker){
  //   if(spk.username =="")
  //   {
  //     return this.http.post<string>(this.baseUrl, std, {observe:'response'});
  //   }
  //   else 
  //   {
  //     return this.http.post<string>(this.baseUrl, spk, {observe:'response'});
  //   }
  // }



}
