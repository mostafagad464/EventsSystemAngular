import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/_services/speaker.service';
import { Speaker } from 'src/app/_models/speaker';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {

  constructor(private spksrv: SpeakerService, private router: Router, private route: ActivatedRoute,
    private userSrv:UserService
  ) {
    userSrv.user.subscribe(
      s=> this.user = s
    )
  }

  user:User = new User();
  speaker: Speaker = new Speaker("", "", "", "", "", 0, "", { city: "", street: "", building: "" });
  id: string = "";

  ngOnInit(): void {
    this.route.params.subscribe(
      a => {
        this.id = a["id"];
      }
    )
    this.spksrv.getSpeaker(this.id).subscribe(
      a => {
        this.speaker = a;
      }
    )
  }

  save() {
    this.spksrv.editSpeaker(this.id, this.speaker).subscribe(
      a => {
        console.log(a);
      }
    )
    if(this.user.role=="admin")
    {
      this.router.navigate(['/speakers']);
    }
    else if(this.user._id = this.speaker._id)
    {
      this.router.navigate(['/speakers/details/'+this.speaker._id]);
    }
  }
}
