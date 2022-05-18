import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';


@Component({
  selector: 'app-show-speaker',
  templateUrl: './show-speaker.component.html',
  styleUrls: ['./show-speaker.component.css']
})
export class ShowSpeakerComponent implements OnInit {

  constructor(public spkSrv:SpeakerService, public router:Router) { }

  speakers:Speaker[]=[];
  // spks:Speaker[]=[];


  ngOnInit(): void {
    this.spkSrv.getAllSpeakers().subscribe(
      a=>{
        this.speakers = a;
      }
    )
  }

  // @Input()
  // inputSpeaker:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});

  // @Input()
  // inputSpeakers:Speaker[]=[];

  AddSpeker(){
    this.router.navigate(['/speakers/add']);
  }
  speakerDetails(id:string){
    this.router.navigate(['/speakers/details/'+id]);
  }
  EditSpeaker(id:string){
    this.router.navigate(['/speakers/edit/'+id]);
  }
  DeleteSpeaker(id:string){
    this.spkSrv.deleteSpeaker(id).subscribe(
      a=>console.log(a)
    );
    this.ngOnInit();
  }

}
