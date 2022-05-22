import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {

  constructor(private spkSrv:SpeakerService, private router:Router, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=> this.user = s
    )
  }
  
  user:User = new User();
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
