import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-show-speaker',
  templateUrl: './show-speaker.component.html',
  styleUrls: ['./show-speaker.component.css']
})
export class ShowSpeakerComponent implements OnInit {

  constructor(public spkSrv:SpeakerService) { }

  speakers:Speaker[]=[];

  ngOnInit(): void {
    this.spkSrv.getAllSpeakers().subscribe(
      a=>{
        this.speakers = a;
        console.log(a);
        console.log(this.speakers);
      }
    )
  }

}
