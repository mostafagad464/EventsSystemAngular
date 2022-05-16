import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EventModule } from '../event/event.module';
import { LayoutRoutingModule } from './layout.routing';
import { FormsModule } from '@angular/forms';
import { SpeakerModule } from '../speaker/speaker.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    EventModule,
    LayoutRoutingModule,
    FormsModule,
    SpeakerModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
  ]
})
export class LayoutModule { }
