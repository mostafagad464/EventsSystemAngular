import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
// import { AdminService } from 'src/app/admin.service';
// import { LoginService } from 'src/app/login.service';
// import { SpeakerService } from 'src/app/speaker.service';
// import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form: FormGroup = new FormGroup();
  loading = false;
  submitted = false

  // constructor(private logServ: LoginService, private router: Router,
  //   private stdSrv: StudentService, private spkSrv: SpeakerService,
  //   private admSrv: AdminService, private route: ActivatedRoute,
  //   // private formbuilder:FormBuilder
  // ) { }

  constructor(private userSrv: UserService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.form = this.formbuilder.group({
    //   email:['',Validators.required],
    //   password:['',Validators.required],
    // })
  }

  // req = {
  //   role: "admin",
  //   email: "",
  //   password: ""
  // }

  req = {
    role: "admin",
    email: "",
    password: ""
  }

  getValue(s: string) {
    this.req.role = s;
  }


  login() {
    this.userSrv.login(this.req).subscribe(a => {
      if(a)
      {
        this.router.navigate(['']);
      }
    })
    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // this.router.navigate(returnUrl);
    // this.router.navigate(['']);
  }

  // login() {
  //   this.userSrv.login(this.req).subscribe(a => {
  //     console.log(a);
  //   })
  //   this.router.navigate(['']);
    // if(this.req.role=="admin")
    // {
    //   this.admSrv.login(this.req).subscribe(a=>{
    //     console.log(a);
    //   })
    //   this.router.navigate(['']);

    // }
    // if(this.req.role=="speaker")
    // {
    //   console.log("Entered condition of role student in login component");
    //   this.spkSrv.login(this.req).subscribe(a=>{
    //     console.log(a);
    //   })
    //   this.router.navigate(['']);

    // }
    // if(this.req.role=="student")
    // {
    //   this.stdSrv.login(this.req).subscribe(a=>{
    //     console.log(a);
    //   })
    //   this.router.navigate(['']);

    // }
    // else 
    // {
    //   console.log("Error");
    // }

    // this.logServ.login(this.req).subscribe(
    //   a => {
    //     // console.log(a);
    //     // console.log(a.status);
    //     // console.log(a.body);

    //     if (a.status == 200) {
    //       // console.log(a);
    //       // localStorage.setItem(this.req.role+"token",a.body?.toString()!);
    //       localStorage.setItem(this.req.role + "token", JSON.stringify(a.body));
    //       let c = JSON.parse(localStorage.getItem(this.req.role + "token")!);
    //       // console.log(c);
    //       // console.log(c.token);

    //       this.router.navigate(['']);
    //     }
    //     else {
    //       console.log("Error");
    //     }
    //     //this.router.navigate(['/departments'])
    //   }
    // )
  // }

  // logout(){
  //   localStorage.removeItem(this.req.role + "token");
  // }
}
