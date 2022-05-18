import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSpeakerComponent } from './add-speaker/add-speaker.component';
import { ShowSpeakerComponent } from './show-speaker/show-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';
import { SpeakerDetailsComponent } from './speaker-details/speaker-details.component';
import { SpeakerRoutingModule } from './speaker.routing';
import { FormsModule } from '@angular/forms';

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
    SpeakerRoutingModule,
    FormsModule
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
