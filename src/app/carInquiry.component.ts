import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { CarInquiry } from './models/carInquiry.model';
import { CarInquiryRequest } from './models/carInquiryRequest.model';

const baseUrl ="http://localhost:8080";
const carInquiryUrl = "/driving/fines/{0}/inquiry";


declare var $: any;

@Component({
  selector: 'car-inquiry',
  templateUrl: './carInquiry.component.html',
  styleUrls: ['./carInquiry.component.css']
})
export class CarInquiryComponent {
  title = 'DrivingInquiries';
  constructor(private http: HttpClient, private router: Router) {
    this.carInquiryRequest = new CarInquiryRequest();
  }

  getCarInquiry() {
    
    let carInquiryUrlTemp:string = carInquiryUrl.replace("{0}",this.carInquiryRequest.barCode);
    console.log(carInquiryUrlTemp);
      this.http.get(baseUrl + carInquiryUrlTemp ).subscribe(response => this.carInquiry = response);
      console.log(this.carInquiry);
  }

  carInquiry: CarInquiry;
  carInquiryRequest: CarInquiryRequest;
  

  // public ngOnInit()
  // {
  //   $(document).ready(function(){
  //      alert("yes"); 
  //   });
  // }
}
