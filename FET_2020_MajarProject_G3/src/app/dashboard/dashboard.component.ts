import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../login-services.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{
  userData : any;
  userDetails : any;
  userRoleId :number =0 ;
  name : any;
  constructor(private loginService : LoginServicesService,private router:Router) 
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
   
    if(this.userRoleId==1){
      this.router.navigate(['/dashboard/chart'])
    }

    if(this.userRoleId==2){
      this.router.navigate(['/dashboard/categories'])
    }
  });
 
 }

 getLoginDetails()
 {
   
     console.log(JSON.parse(this.loginService.getLoginDetails()).name);
   
 }
}
