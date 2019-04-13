import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarInquiryComponent } from './carInquiry.component';
import { CertificateInquiryComponent } from './certificateInquiry.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'carInquiry',
    component: CarInquiryComponent
  },
  {
    path: 'certificateInquiry',
    component: CertificateInquiryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
