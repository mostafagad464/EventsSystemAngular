import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  user:User = new User();
  constructor(private route:ActivatedRoute, private eventServ:EventService, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=>this.user=s
    )
  }

  id:number=0;
  // std:Student = new Student("", "", "");
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  students:Student [] = [];
  speakers:Speaker [] = []; 
  event:Event = new  Event(0,"","",new Date("2022/04/01"),this.speaker, this.speakers, this.students);
  
  ngOnInit(): void {
    this.route.params.subscribe(
      a=>{
        this.id = a["id"];
        console.log(this.id);
      }
    )
    this.eventServ.getEvent(this.id).subscribe(
      a=>{
        this.event=a;
        console.log(this.event);
      }
    )
  }

  editEvent(id:number){

  }
  deleteEvent(id:number){

  }



}
