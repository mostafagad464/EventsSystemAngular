import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './event.service';
import { EventModule } from './event/event.module';
import {HttpClientModule } from '@angular/common/http'
import { StudentService } from './student.service';
import { SpeakerService } from './speaker.service';
import { StudentModule } from './student/student.module';
import { SpeakerModule } from './speaker/speaker.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { RegistrationService } from './registration.service';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventModule,
    HttpClientModule,
    StudentModule,
    SpeakerModule,
    FormsModule,
    LayoutModule
  ],
  providers: [
    EventService,
    StudentService,
    SpeakerService,
    RegistrationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
