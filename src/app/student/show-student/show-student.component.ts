import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router, private userSrv:UserService) { 
    userSrv.user.subscribe(
      s=>this.user = s
    )
  }

  user:User = new User();
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
  studentDetails(id:string){
    this.router.navigate(['/students/details/'+id]);

  }
  editStudent(id:string){
    this.router.navigate(['/students/edit/'+id]);
  }
  deleteStudent(id:string){
    this.studentService.deleteStudent(id).subscribe(
      a=>console.log(a)
    )
    this.ngOnInit();
  }
}
