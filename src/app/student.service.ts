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
  getStudent(id:number){
    return this.http.get<Student>(this.baseUrl+"/"+id);
  }
  createStudent(student:Student){
    return this.http.post<string>(this.baseUrl,student);
  }
  editStudent( id:number,student:Student){
    return this.http.put<string>(this.baseUrl+"/"+id,student);
  }
  deleteStudent(id:number){
    return this.http.delete<Student>(this.baseUrl+"/"+id);
  }
  

}
