import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { StudentService } from 'src/app/student.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public rigServ:RegistrationService, public stdSrv:StudentService, public router:Router) { }

  ngOnInit(): void {
  }

  spk:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  std:Student = new Student(0,"","","","",0,"","");

  role:string = "";
  stdId:number=0;
  temp:number=0;
  getValue(s:string)
  {
    this.role = s;
  }
  
  showform(){
    
    this.stdSrv.getAllStudents().subscribe(a=>{
      a.forEach(element => {
        this.temp=element._id;
        if(this.temp>this.stdId){
          this.stdId = this.temp;
        }
      });
      this.stdId+=1;
    });
    // console.log(Student.length);

    if (this.role != ""){
      document.getElementById("radiodiv")!.style.display = "none";
      document.getElementById("formdiv")!.style.display = "block";
    }
    if(this.role == "speaker"){
      document.getElementById("usernamediv")!.style.display = "block";
      document.getElementById("addressfieldset")!.style.display = "block";
    }
  }
  
  addUser()
  {
    if(this.role=="speaker"){
      this.spk.email = this.std.email;
      this.spk.password = this.std.password;
    }
    this.std._id = this.stdId;
    console.log(this.spk,"-----------", this.std);
    this.spk.age=40;
    this.spk.bio="fsdfsdfds";
    this.spk.name="Mostafa";

    this.rigServ.registration(this.std, this.spk).subscribe(
      a=>{
        console.log(a);
        if(a.status==200){
          this.router.navigate(['/login']);
        }
        else{
          console.log("Error");
          
        }
      }
    )
    
  }
}
