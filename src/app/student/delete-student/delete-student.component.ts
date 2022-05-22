import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { StudentService } from 'src/app/_services/student.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  user:User= new User();
  id:string="";

  constructor(private stdSrv:StudentService, private userSrv:UserService, private route:ActivatedRoute, private router:Router) { 
    userSrv.user.subscribe(
      s=> this.user=s
    )
    route.params.subscribe(
      a=>this.id=a['id']
    )
    if(this.user){
      stdSrv.deleteStudent(this.id).subscribe(
        a=>console.log(a)
      )
      if(this.user.role=="admin"){
        router.navigate(['/students']);
      }
      else if (this.user._id==this.id){
        userSrv.logout();
      }      
    }
  }

  ngOnInit(): void {
  }

}
