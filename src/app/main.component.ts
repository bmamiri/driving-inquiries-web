import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'DrivingInquiries';

  // public ngOnInit()
  // {
  //   $(document).ready(function(){
  //      alert("yes"); 
  //   });
  // }
}
