import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../login-services.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  // mydetails : any;
  constructor(private servicelogin : LoginServicesService) { }

  ngOnInit(): void {
    
  }
}
