import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(public stdsrv:StudentService, public router:Router, public route:ActivatedRoute) { }
  
  student:Student = new Student(0,"","","","",0,"");
  id:number=0;

  ngOnInit(): void {
    this.route.params.subscribe(
      a=>this.id=a['id']
    )
    this.stdsrv.getStudent(this.id).subscribe(
      
      a=>
      {
        this.student=a;
      }
    )
  }

  editStudent(){
    this.stdsrv.editStudent(this.student._id,this.student).subscribe(
      a=>console.log(a)
    )
    this.router.navigate(['/students']);
  }

}
