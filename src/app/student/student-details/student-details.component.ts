import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(public stdsrv:StudentService, public router:Router, public route:ActivatedRoute) { }

  student:Student = new Student(0,"","","","",0,"");
  id:number=0;

  ngOnInit(): void {
    this.route.params.subscribe(
      a=>this.id=a['id']
    )
    this.stdsrv.getStudent(this.id).subscribe(
      a=>this.student=a
    )
  }

}
