import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

  constructor(public eventService:EventService) { }

  events:Event[]=[];

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      a=>
      {
        this.events = a;

        // console.log(a);
        console.log(this.events);
        // console.dir(a);
        // console.log(a);
        // this.events = Object.keys(a).map(b=> {return a[b];} );
        // this.events = Object.entries(a).map(b=> {return a[b];} );
        // for(let i=0; i<a.length; i++)
        // {
        //   this.events[i]._id=a[i]._id;
        //   this.events[i].event=a[i].event;
        //   this.events[i].title=a[i].title;
        //   this.events[i].mainSpeaker=a[i].mainSpeaker;
        //   this.events[i].otherSpeakers=a[i].otherSpeakers;
        //   this.events[i].students=a[i].students;
        //   console.log(a[i]);
          
        // }

        
        // console.log();
        
        

        // console.log(this.events);
        // console.log(a.);
        // this.events.map(function(value:Event,index:number,evns:Event[])=>{});
        // console.log(a);
      }
    )
    //console.log(this.events);
  }

}
