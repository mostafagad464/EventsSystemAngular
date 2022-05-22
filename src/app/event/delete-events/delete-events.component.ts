import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { EventService } from 'src/app/_services/event.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-delete-events',
  templateUrl: './delete-events.component.html',
  styleUrls: ['./delete-events.component.css']
})
export class DeleteEventsComponent implements OnInit {

  user:User = new User();
  id:number=0;
  constructor(private userSrv:UserService, private router:Router, private eventSrv:EventService, private route:ActivatedRoute) {
    userSrv.user.subscribe(
      s=>this.user=s
    );
    route.params.subscribe(
      a=> this.id=a['id']
    )
    // alert("Outside condeition");
    if(this.user && this.user.role=="admin"){
      // alert("Inside condeition:  " +this.user + this.user.role + ", ID: " + this.id);
      eventSrv.deleteEvent(this.id).subscribe(
        a=>console.log(a)
      );
    }
    router.navigate(['/events']);
  }

  ngOnInit(): void {
  }

}
