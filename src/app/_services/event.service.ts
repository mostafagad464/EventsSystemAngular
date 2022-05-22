import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Event } from '../_models/event';
import { UserService } from './user.service';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  user:User=new User();

  constructor(private http:HttpClient, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=>this.user=s
    )
  }

  baseUrl = "http://localhost:8080/events";

  getAllEvents(){
    return this.http.get<Event[]>(this.baseUrl);
  }
  createEvent(event:Event){
    return this.http.post<Event>(this.baseUrl, event);
  }
  getEvent(id:number){
    return this.http.get<Event>(this.baseUrl+"/"+id);
  }
  editEvent(id:number, event:Event){
    return this.http.put<string>(this.baseUrl+"/"+id,event);
  }
  deleteEvent(id:number){
    return this.http.delete<string>(this.baseUrl+"/"+id);
  }
  // editEventPeople(id:number, event:Event){
  //   return this.http.put<string>(this.baseUrl+"/"+id,event);
  // }

}
