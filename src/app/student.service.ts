import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }

  baseUrl = "http://localhost:8080/students";

  getAllStudents(){
    return this.http.get<Student[]>(this.baseUrl);
  }

}
