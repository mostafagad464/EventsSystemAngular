import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegistrationService } from 'src/app/_services/registration.service';
import { StudentService } from 'src/app/_services/student.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public userServ:UserService, public stdSrv:StudentService, public router:Router) { }

  ngOnInit(): void {
  }

  spk:Speaker = new Speaker("","","","","",0,"",{city:"",street:"",building:""});
  std:Student = new Student();
  user:User = new User();

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
        this.temp=parseInt(element._id);
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
    // if(this.role=="speaker"){
    //   this.spk.email = this.std.email;
    //   this.spk.age = this.std.age;
    //   this.spk.bio = this.std.bio;
    //   this.spk.name = this.std.name;
    //   this.spk.password = this.std.password;
    // }
    this.user.role = this.role;
    if(this.role=="student"){
      this.user._id == ""+this.stdId;
    }

    // this.std._id = ""+this.stdId;
    // console.log(this.spk,"-----------", this.std);

    this.userServ.register(this.user).subscribe(
      a=>{
        console.log(a);
        if(a){
          this.router.navigate(['/login']);
        }
        // else{
        //   console.log("Error");
        // }
      }
    )
    
  }
}
