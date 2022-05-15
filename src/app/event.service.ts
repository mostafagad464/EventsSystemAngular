import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Event } from './_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http:HttpClient) { }

  baseUrl = "http://localhost:8080/events";

  getAllEvents(){
    return this.http.get<Event[]>(this.baseUrl);
  }
  createEvent(event:Event){
    return this.http.post<Event>(this.baseUrl, event);
  }

}
