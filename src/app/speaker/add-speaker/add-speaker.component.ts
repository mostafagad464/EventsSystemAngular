import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {

  constructor(public spkSrv:SpeakerService, public router:Router) { }
  
  speaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});

  ngOnInit(): void {
  }


  addSpeaker(){
    this.spkSrv.createSpeaker(this.speaker).subscribe(
      a=>console.log(a)
    )
    this.router.navigate(['/speakers']);
  }
}
