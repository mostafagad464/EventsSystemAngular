import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';


@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit, OnChanges {


  constructor(public eventService:EventService) { }

  event:Event = new Event(0,"",new Date("2022-01-01"),new Speaker("","","","",{city:"",street:"",building:""}),[],[]);
  // arr:object [] = [];
  //students:Student [] = [];
  //speakers:Speaker [] = [];

  addEvent(){
    console.log(this.event);
    // console.log(this.arr);
    //console.log(this.students);
    //this.event.students.push(1);
    this.eventService.createEvent(this.event).subscribe(
      a=>{
        console.log(a);
      }
    )
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
