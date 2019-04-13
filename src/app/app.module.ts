import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CertificateInquiryComponent } from './certificateInquiry.component';
import { CarInquiryComponent } from './carInquiry.component';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    AppComponent,
    CertificateInquiryComponent,
    CarInquiryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
