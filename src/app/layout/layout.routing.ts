import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";


const routes: Routes = [
    // {path:"",component:HomeComponent},
    // {path:"login",component:LoginComponent},
    // {path:"signup",component:RegistrationComponent},
    
    // {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:RegistrationComponent},
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class LayoutRoutingModule {
}
