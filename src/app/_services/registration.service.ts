import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from '../_models/speaker';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }

  baseUrl = "http://localhost:8080/register";

  
  registration(std:Student, spk:Speaker){
    if(spk.username =="")
    {
      return this.http.post<string>(this.baseUrl, std, {observe:'response'});
    }
    else 
    {
      return this.http.post<string>(this.baseUrl, spk, {observe:'response'});
    }
  }

}

