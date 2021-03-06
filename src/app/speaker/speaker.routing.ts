import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AddSpeakerComponent } from "./add-speaker/add-speaker.component";
import { DeleteSpeakerComponent } from "./delete-speaker/delete-speaker.component";
import { EditSpeakerComponent } from "./edit-speaker/edit-speaker.component";
import { ShowSpeakerComponent } from "./show-speaker/show-speaker.component";
import { SpeakerDetailsComponent } from "./speaker-details/speaker-details.component";


const routes: Routes = [
    // {path:"speakers",component:ShowSpeakerComponent},
    // {path:"speakers/add",component:AddSpeakerComponent},
    // {path:"speakers/edit/:id",component:EditSpeakerComponent},
    // {path:"speakers/delete/:id",component:DeleteSpeakerComponent},
    // {path:"speakers/details/:id",component:SpeakerDetailsComponent},
    {path:'',component:ShowSpeakerComponent},
    {path:'add',component:AddSpeakerComponent, canActivate:[AuthGuard]},
    {path:'edit/:id',component:EditSpeakerComponent, canActivate:[AuthGuard]},
    {path:'delete/:id',component:DeleteSpeakerComponent, canActivate:[AuthGuard]},
    {path:'details/:id',component:SpeakerDetailsComponent},
]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class SpeakerRoutingModule {
}
