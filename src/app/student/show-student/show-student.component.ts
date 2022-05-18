import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(public studentService:StudentService,public router:Router) { }

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
  AddStudent(){
    this.router.navigate(['/students/add']);
  }
  studentDetails(id:number){
    this.router.navigate(['/students/details/'+id]);

  }
  editStudent(id:number){
    this.router.navigate(['/students/edit/'+id]);
  }
  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe(
      a=>console.log(a)
    )
    this.ngOnInit();
  }
}
