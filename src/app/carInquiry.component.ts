import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'car-inquiry',
  templateUrl: './carInquiry.component.html',
  styleUrls: ['./carInquiry.component.css']
})
export class CarInquiryComponent {
  title = 'DrivingInquiries';

  // public ngOnInit()
  // {
  //   $(document).ready(function(){
  //      alert("yes"); 
  //   });
  // }
}
