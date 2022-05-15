import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddSpeakerComponent } from "./add-speaker/add-speaker.component";
import { DeleteSpeakerComponent } from "./delete-speaker/delete-speaker.component";
import { EditSpeakerComponent } from "./edit-speaker/edit-speaker.component";
import { ShowSpeakerComponent } from "./show-speaker/show-speaker.component";
import { SpeakerDetailsComponent } from "./speaker-details/speaker-details.component";


const routes: Routes = [
    {path:"speakers",component:ShowSpeakerComponent},
    {path:"addspeaker",component:AddSpeakerComponent},
    {path:"editspeaker",component:EditSpeakerComponent},
    {path:"deletespeaker",component:DeleteSpeakerComponent},
    {path:"speakerdetails",component:SpeakerDetailsComponent},
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
