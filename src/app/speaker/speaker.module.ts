import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { ShowSpeakerComponent } from './show-speaker/show-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerRoutingModule } from './speaker.routing';

@NgModule({
  declarations: [
    AddSpeakerComponent,
    ShowSpeakerComponent,
    EditSpeakerComponent,
    DeleteSpeakerComponent,
    SpeakerDetailsComponent
  ],
  imports: [
    CommonModule,
    SpeakerRoutingModule
  ],
  exports: [
    ShowSpeakerComponent,
    AddSpeakerComponent,
    EditSpeakerComponent,
    DeleteSpeakerComponent,
    SpeakerDetailsComponent
  ]
})
export class SpeakerModule { }
