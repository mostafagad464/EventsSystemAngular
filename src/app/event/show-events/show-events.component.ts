import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/_services/event.service';
import { Event } from 'src/app/_models/event';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router, private userSrv: UserService) {
    userSrv.user.subscribe(
      s => this.user = s
    )
  }

  events: Event[] = [];
  flag: number = 0;
  user: User = new User();

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      a => {
        this.events = a;
        console.log(this.events);
      }
    )
  }


  incrementflag() {
    this.flag += 1;
  }

  addEvent() {
    this.router.navigate(['/events/add']);
  }

  eventDetails(id: number) {
    this.router.navigate(['/events/details/' + id]);

  }
  editEvent(id: number) {
    this.router.navigate(['/events/edit/' + id]);
  }
  async deleteEvent(id: number) {
    // this.router.navigate(['/events/delete/'+id]);
    await this.eventService.deleteEvent(id).subscribe(a => console.log(a));
    this.ngOnInit();
  }


}
