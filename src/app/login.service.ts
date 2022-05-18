import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(public http:HttpClient) { }

  baseUrl = "http://localhost:8080/login";

  login(req:object){
    return this.http.post<string>(this.baseUrl,req,{observe:'response'});
  }
}
