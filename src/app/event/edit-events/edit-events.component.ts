import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import { Event } from 'src/app/_models/event';
import { StudentService } from 'src/app/student.service';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public eventServ:EventService, public stdSrv:StudentService, 
    public spkSrv:SpeakerService, public router:Router) 
    { }

  id:number=0;
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  students:Student [] = [];
  eventStudents:Student [] = [];
  speakers:Speaker [] = []; 
  eventSpeakers:Speaker [] = []; 
  event:Event = new  Event(0,"","",new Date("2022/04/01"),this.speaker, this.eventSpeakers, this.eventStudents);


  ngOnInit(): void {
    this.route.params.subscribe(
      a=>{
        this.id = a["id"];
      }
    )
    this.eventServ.getEvent(this.id).subscribe(
      a=>{
        this.event=a;
      }
    )
    this.stdSrv.getAllStudents().subscribe(a=>this.students=a);
    this.spkSrv.getAllSpeakers().subscribe(a=>this.speakers=a);
    console.log(this.event);
  }
  save(){

    this.eventServ.editEvent(this.event._id,this.event).subscribe(
      a=>console.log(a)
    )
    this.router.navigate(['/events']);
  }
}
