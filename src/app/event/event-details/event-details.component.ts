import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public eventServ:EventService) { }

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



}
