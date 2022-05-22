import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  constructor( private spksrv: SpeakerService, private router:Router, private route:ActivatedRoute, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=> this.user = s
    )
  }

  user:User = new User();
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  id:string="";

  ngOnInit(): void {
    this.route.params.subscribe(
      a=> this.id=a['id']
    )
    this.spksrv.getSpeaker(this.id).subscribe(
      a=> this.speaker = a
    )
  }
}
