import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentRoutingModule } from './student.routing';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    ShowStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [
    ShowStudentComponent,
    AddStudentComponent
  ]
})
export class StudentModule { }
