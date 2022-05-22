import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private stdsrv: StudentService, private router: Router, private route: ActivatedRoute,
    private userSrv:UserService
  ) {
    userSrv.user.subscribe(
      s=>this.user=s
    )
  }

  user:User = new User();
  student: Student = new Student();
  id: string = "0";

  ngOnInit(): void {
    this.route.params.subscribe(
      a => this.id = a['id']
    )
    this.stdsrv.getStudent(this.id).subscribe(

      a => {
        this.student = a;
      }
    )
  }

  editStudent() {
    this.stdsrv.editStudent(this.student._id, this.student).subscribe(
      a => console.log(a)
    )
    if(this.user.role=="admin")
    {
      this.router.navigate(['/students']);
    }
    else if(this.user._id = this.student._id)
    {
      this.router.navigate(['/students/details/'+this.student._id]);
    }
  }

}
