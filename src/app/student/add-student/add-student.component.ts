import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public stdSrv:StudentService, public router:Router) { }

  student:Student = new Student(0,"","","","",0,"");

  stdId:number=0;
  temp:number=0;

  ngOnInit(): void {
    this.stdSrv.getAllStudents().subscribe(a=>{
      a.forEach(element => {
        this.temp=element._id;
        if(this.temp>this.stdId){
          this.stdId = this.temp;
        }
      });
      this.stdId+=1;
    });
  }

  addStudent()
  {
    this.student._id=this.stdId;
    this.stdSrv.createStudent(this.student).subscribe(
      a=>console.log(a)
    )
    this.router.navigate(['/students']);
  }
}
