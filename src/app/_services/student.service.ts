import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "http://localhost:8080/students";

  std:Student =new Student();

  flag=false;


  // private userSubject:BehaviorSubject<Student | null>;
  private userSubject:BehaviorSubject<Student>;
  public student:Observable<Student>;
  // std:Student =new Student(0,"","","","",0,"");

  constructor(private http:HttpClient, private router:Router, private logSrv:LoginService) {
      this.userSubject = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('studenttoken')!));
      this.student = this.userSubject.asObservable();
    
  }


  // public get studentValue(): Student {
  //   return this.userSubject.value;
  // }

  // // login(emial: string, password: string) {
  // login(req:object) {
  //   return this.http.post<Student>(this.baseUrl+"login", req)
  //     .pipe(map(std => {
  //       // console.log(std);
  //       // console.log(std.token);
  //       // console.log(std.role);
  //       localStorage.setItem('student', JSON.stringify(std));
  //       this.userSubject.next(std);
  //       return std;
  //     }))
  // }

  // logout(){
  //   // localStorage.removeItem('student');
  //   localStorage.removeItem('student');
  //   this.userSubject.next(new Student);
  //   this.router.navigate(['/login']);
  // }

  // // register(std:Student){
  // //   return this.http.post(this.baseUrl+"students",std)
  // // }

  getAllStudents(){
    return this.http.get<Student[]>(this.baseUrl);
  }
  getStudent(id:string){
    return this.http.get<Student>(this.baseUrl+"/"+id);
  }
  createStudent(student:Student){
    return this.http.post<string>(this.baseUrl,student);
  }
  editStudent( id:string,student:Student){
    return this.http.put<string>(this.baseUrl+"/"+id,student);
  }
  deleteStudent(id:string){
    return this.http.delete<any>(this.baseUrl+"/"+id);
  }
  

}
