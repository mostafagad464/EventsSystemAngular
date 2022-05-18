import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';


@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit, OnChanges {


  constructor(public eventService:EventService, public stdSrv:StudentService, public spkSrv:SpeakerService) { }
  
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  speakers:Speaker[] = [];
  eventSpeakers:Speaker[] = [];
  students:Student[] = [];
  evevntStudents:Student[] = [];
  event:Event = new Event(0,"","",new Date("2022-01-01"),this.speaker,this.eventSpeakers,this.evevntStudents);
  eventId:number=0;
  temp:number=0;


  addEvent(){
    console.log(this.event);
    this.event._id = this.eventId;
    console.log(this.event);

    this.eventService.createEvent(this.event).subscribe(
      a=>{
        console.log(a);
      }
    )
  }

  ngOnInit(): void {
    this.stdSrv.getAllStudents().subscribe(a=>this.students=a);
    this.spkSrv.getAllSpeakers().subscribe(a=>this.speakers=a);
    this.eventService.getAllEvents().subscribe(a=>{
      a.forEach(element => {
        this.temp=element._id;
        if(this.temp>this.eventId)
        {
          this.eventId = this.temp;
        }
      });
      this.eventId+=1;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
