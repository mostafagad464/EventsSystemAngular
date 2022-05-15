import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowEventsComponent } from "./show-events/show-events.component";
import { AddEventsComponent } from "./add-events/add-events.component";
import { EditEventsComponent } from "./edit-events/edit-events.component";
import { DeleteEventsComponent } from "./delete-events/delete-events.component";
import { EventDetailsComponent } from "./event-details/event-details.component";

const routes: Routes = [
    {path:"events",component:ShowEventsComponent},
    {path:"events/add",component:AddEventsComponent},
    {path:"events/edit",component:EditEventsComponent},
    {path:"events/delete",component:DeleteEventsComponent},
    {path:"events/details",component:EventDetailsComponent},
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
