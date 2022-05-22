import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-delete-speaker',
  templateUrl: './delete-speaker.component.html',
  styleUrls: ['./delete-speaker.component.css']
})
export class DeleteSpeakerComponent implements OnInit {

  user:User = new User();
  id:string = "";

  constructor(private spkSrv:SpeakerService, private userSrv:UserService, private router:Router, private route:ActivatedRoute) { 
    userSrv.user.subscribe(
      s=>this.user = s
    )
    route.params.subscribe(
      a=> this.id= a['id']
    )
    if(this.user){
      spkSrv.deleteSpeaker(this.id).subscribe(
        a=>console.log(a)
      )
      if(this.user.role=="admin"){
        router.navigate(['/speakers']);
      }
      else if (this.user._id==this.id){
        userSrv.logout();
      }      
    }
  }

  ngOnInit(): void {
  }

}
