import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  // {path:"", component:HomeComponent}
  // {path:"students",loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
  // { path: 'home', loadChildren:()=>import("./layout/layout.module").then(s=>s.LayoutModule),},
  { path: '', component:HomeComponent},
  // { path: 'home', loadChildren:()=>import("./layout/layout.module").then(s=>s.LayoutModule)},
  { path: 'students', loadChildren:()=>import("./student/student.module").then(s=>s.StudentModule), canActivate:[AuthGuard] },
  { path: 'events', loadChildren:()=>import("./event/event.module").then(e=>e.EventModule)},// canActivate:[AuthGuard] },
  { path: 'speakers', loadChildren:()=>import("./speaker/speaker.module").then(s=>s.SpeakerModule)},// canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
