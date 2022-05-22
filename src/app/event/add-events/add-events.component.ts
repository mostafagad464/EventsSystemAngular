import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { StudentService } from 'src/app/_services/student.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit, OnChanges {


  constructor(private userSrv:UserService, private router:Router, private eventService:EventService, private stdSrv:StudentService, private spkSrv:SpeakerService) { 
    userSrv.user.subscribe(
      s=>this.user=s
    )
  }
  
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  speakers:Speaker[] = [];
  eventSpeakers:Speaker[] = [];
  students:Student[] = [];
  evevntStudents:Student[] = [];
  event:Event = new Event(0,"","",new Date("2022-01-01"),this.speaker,this.eventSpeakers,this.evevntStudents);
  eventId:number=0;
  temp:number=0;
  user:User = new User();


  addEvent(){
    console.log(this.event);
    this.event._id = this.eventId;
    console.log(this.event);

    this.eventService.createEvent(this.event).subscribe(
      a=>{
        console.log(a);
      }
    )
    this.router.navigate(['/events']);
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
