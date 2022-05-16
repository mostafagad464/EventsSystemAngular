import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public logServ:LoginService, public router:Router) { }

  ngOnInit(): void {
  }

  req = {
    role:"",
    email:"",
    password:""  
  }
  
  getValue(s:string)
  {
    this.req.role = s;
  }

  res = {
    message:"",
    token:""
  }
  login(){
    this.logServ.login(this.req).subscribe(
      a=>{
        console.log(a);
        console.log(a.status);
        console.log(a.body);

        if(a.status == 200)
        {
          console.log(a);
          this.router.navigate(['']);
        }
        else
        {
        console.log("Error");
        }
        //this.router.navigate(['/departments'])
      }
    )
  }
}
