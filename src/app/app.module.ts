import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './_services/event.service';
import { EventModule } from './event/event.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { StudentService } from './_services/student.service';
import { SpeakerService } from './_services/speaker.service';
import { StudentModule } from './student/student.module';
import { SpeakerModule } from './speaker/speaker.module';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { RegistrationService } from './_services/registration.service';
import { LoginService } from './_services/login.service';
import { JwtInterceptor } from './auth/jwt.interceptor'
import { ErrorInterceptor } from './auth/error.interceptor'


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
    LayoutModule, 
  ],
  providers: [
    // EventService,
    // StudentService,
    // SpeakerService,
    // RegistrationService,
    // LoginService,
    // AppRoutingModule,
    {provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
