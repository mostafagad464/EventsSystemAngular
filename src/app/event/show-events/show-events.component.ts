import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

  constructor(public eventService:EventService, public router:Router) { }

  events:Event[]=[];
  flag:number=0;

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      a=>
      {
        this.events = a;
        console.log(this.events);
      }
    )
  }

  incrementflag()
  {
    this.flag+=1;
  }

  eventDetails(id:number)
  {
    this.router.navigate(['/events/details/'+id]);
    // this.eventService.getEvent(_id).subscribe(
    //   a=>{
    //     console.log(a);
    //   }
    // )
    //this.router.navigate(['/departments'])
  }
}
