import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(public studentService:StudentService) { }

  students:Student[] = [];

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      a=>{
        this.students = a;
        console.log(this.students);
        console.log(a);
      }
    )
  }

}
