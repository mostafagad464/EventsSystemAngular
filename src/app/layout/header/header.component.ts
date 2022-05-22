import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
// import { StudentService } from 'src/app/student.service';
// import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:User = new User();

  constructor(private userSrv: UserService) {
    userSrv.user.subscribe(
      s=>{
        this.user=s;
      }
    );
  }

  Profile(){
    console.log(this.user);
    console.log(this.user._id);
  }

  ngOnInit(): void {
  }

  logout(){
    this.userSrv.logout();
    console.log(this.user);
    this.ngOnInit();
  }


}
