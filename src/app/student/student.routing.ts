import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddStudentComponent } from "./add-student/add-student.component";
import { DeleteStudentComponent } from "./delete-student/delete-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { ShowStudentComponent } from "./show-student/show-student.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";

const routes: Routes = [
    // {path:"students",component:ShowStudentComponent},
    // {path:"students/add",component:AddStudentComponent},
    // {path:"students/edit/:id",component:EditStudentComponent},
    // {path:"students/delete/:id",component:DeleteStudentComponent},
    // {path:"students/details/:id",component:StudentDetailsComponent},
    {path:'',component:ShowStudentComponent},
    {path:'add',component:AddStudentComponent},
    {path:'edit/:id',component:EditStudentComponent},
    {path:'delete/:id',component:DeleteStudentComponent},
    {path:'details/:id',component:StudentDetailsComponent},

    
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class StudentRoutingModule {
}
