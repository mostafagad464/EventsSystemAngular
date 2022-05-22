import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private stdSrv:StudentService, private router:Router, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=> this.user = s
    )
  }

  user:User = new User();
  student:Student = new Student();

  stdId:number=0;
  temp:number=0;

  ngOnInit(): void {
    this.stdSrv.getAllStudents().subscribe(a=>{
      a.forEach(element => {
        this.temp=parseInt(element._id);
        if(this.temp>this.stdId){
          this.stdId = this.temp;
        }
      });
      this.stdId+=1;
    });
  }

  addStudent()
  {
    this.student._id=""+this.stdId;
    this.stdSrv.createStudent(this.student).subscribe(
      a=>console.log(a)
    )
    this.router.navigate(['/students']);
  }
}
