import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEventsComponent } from './show-events/show-events.component';
import { AddEventsComponent } from './add-events/add-events.component';
import { EditEventsComponent } from './edit-events/edit-events.component';
import { DeleteEventsComponent } from './delete-events/delete-events.component';
import { AddEventsInsStdComponent } from './add-events-ins-std/add-events-ins-std.component';
import { EventRoutingModule } from './event.routing';
import { FormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SpeakerModule } from '../speaker/speaker.module';



@NgModule({
  declarations: [
    ShowEventsComponent,
    AddEventsComponent,
    EditEventsComponent,
    DeleteEventsComponent,
    AddEventsInsStdComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    SpeakerModule
  ],
  exports: [
    ShowEventsComponent,
    AddEventsComponent,
    EditEventsComponent,
    DeleteEventsComponent,
    AddEventsInsStdComponent
  ]
})
export class EventModule { }
