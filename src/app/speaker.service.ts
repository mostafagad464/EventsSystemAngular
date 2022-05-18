import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  baseUrl = "http://localhost:8080/speakers";

  constructor(public http:HttpClient) { }

  getAllSpeakers(){
    return this.http.get<Speaker[]>(this.baseUrl);
  }
  getSpeaker(id:string){
    return this.http.get<Speaker>(this.baseUrl+"/"+id);
  }
  createSpeaker(speaker:Speaker){
    return this.http.post<string>(this.baseUrl,speaker);
  }
  editSpeaker( id:string,speaker:Speaker){
    return this.http.put<string>(this.baseUrl+"/"+id,speaker);
  }
  deleteSpeaker(id:string){
    return this.http.delete<Speaker>(this.baseUrl+"/"+id);
  }
}
