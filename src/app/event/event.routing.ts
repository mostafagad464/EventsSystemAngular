import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowEventsComponent } from "./show-events/show-events.component";
import { AddEventsComponent } from "./add-events/add-events.component";
import { EditEventsComponent } from "./edit-events/edit-events.component";
import { DeleteEventsComponent } from "./delete-events/delete-events.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
    // {path:"events",component:ShowEventsComponent},
    // {path:"events/add",component:AddEventsComponent},
    // {path:"events/edit/:id",component:EditEventsComponent},
    // {path:"events/delete/:id",component:DeleteEventsComponent},
    // {path:"events/details/:id",component:EventDetailsComponent},
    {path:'',component:ShowEventsComponent},
    {path:'add',component:AddEventsComponent,canActivate:[AuthGuard]},
    {path:'edit/:id',component:EditEventsComponent, canActivate:[AuthGuard]},
    {path:'delete/:id',component:DeleteEventsComponent, canActivate:[AuthGuard]},
    {path:'details/:id',component:EventDetailsComponent},

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class EventRoutingModule{

}
