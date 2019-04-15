import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { CarInquiry } from './models/carInquiry.model';
import { CarInquiryRequest } from './models/carInquiryRequest.model';
import { WizardComponent } from 'angular-archwizard';

const baseUrl = "http://localhost:8080";
const carInquiryUrl = "/driving/fines/{0}/inquiry";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'اتعلام خلافی و نمره منفی گواهینامه';

  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  constructor(private http: HttpClient, private router: Router) {
    this.carInquiryRequest = new CarInquiryRequest();
  }

  getCarInquiry() {

    let carInquiryUrlTemp: string = carInquiryUrl.replace("{0}", this.carInquiryRequest.barCode);
    this.http.get(baseUrl + carInquiryUrlTemp).subscribe(response => this.carInquiry = response);
    this.wizard.navigation.goToNextStep();
  }

  carInquiry: CarInquiry;
  carInquiryRequest: CarInquiryRequest;
}
