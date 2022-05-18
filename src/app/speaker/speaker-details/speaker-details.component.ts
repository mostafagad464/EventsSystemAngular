import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  constructor( public spksrv: SpeakerService, public router:Router, public route:ActivatedRoute) { }

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
