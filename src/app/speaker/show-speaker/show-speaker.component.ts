import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';


@Component({
  selector: 'app-show-speaker',
  templateUrl: './show-speaker.component.html',
  styleUrls: ['./show-speaker.component.css']
})
export class ShowSpeakerComponent implements OnInit {

  constructor(private spkSrv:SpeakerService, private router:Router, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=> this.user = s
    )
  }

  user:User = new User();
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
