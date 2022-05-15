import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public rigServ:RegistrationService) { }

  ngOnInit(): void {
  }

  spk:Speaker = new Speaker("","","","",{city:"",street:"",building:""});
  std:Student = new Student("","","");

  role:string = "";
  getValue(s:string)
  {
    this.role = s;
  }

  showform(){
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
    this.std._id = "6";
    console.log(this.spk,"-----------", this.std);
    this.rigServ.registration(this.std, this.spk).subscribe(
      a=>{
        console.log(a);
      }
    )
  }
}
