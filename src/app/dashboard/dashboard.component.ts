import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../login-services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData : any;
  userDetails : any;
  userRoleId :any;
  name : any;
  constructor(private loginService : LoginServicesService) 
  {
    this.getUserDetails();
   }

  ngOnInit(): void {
   
  }
 getUserDetails()
 {
  this.loginService.getuserDetails().subscribe((data)=>{
    this.userData =JSON.stringify(data);
    this.userDetails= JSON.parse(this.userData);
    this.userRoleId = this.userDetails.roleid;
    this.name = this.userDetails.name;
    // console.log("User Details stringify "+this.userData);
    // console.log("User Details "+this.userDetails);
  })
  
if( this.userRoleId == 2)
{
  console.log("welcome User");
  // this.router.navigate(['']);    
  var details = this.loginService.getLoginDetails();
  console.log(JSON.parse(details.name));
}
else
{
  console.log("Welcome Admin");
  // this.router.navigate(['']);    
}

 }
}
