import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {

  constructor(public spksrv:SpeakerService, public router:Router, public route:ActivatedRoute) { }

  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  id:string="";

  ngOnInit(): void {
    this.route.params.subscribe(
      a=>{
        this.id = a["id"];
      }
    )
    this.spksrv.getSpeaker(this.id).subscribe(
      a=>{
        this.speaker = a;
      }
    )
  }

  save(){
    this.spksrv.editSpeaker(this.id,this.speaker).subscribe(
      a=>{
        console.log(a);
      }
    )
    this.router.navigate(['/speakers']);
  }
}
