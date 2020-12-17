import { Component, OnInit, OnDestroy,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy,OnChanges {
  navbarOpen = false;
  isLogin : boolean = sessionStorage.getItem('isLoggedIn')?true : false ;

  constructor(private router : Router,
    private authService : AuthServiceService) 
    {
        

    }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void 
  {
    console.log("Out of header")
    throw new Error("Method not implemented.");
  }


  ngOnInit(): void 
  {
 
  }
  ngOnDestroy():void
  {
    console.log("Out of header")
    this.isLogin = false;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
 
  logout(){
    delete sessionStorage['token'];
    delete sessionStorage['isLoggedIn'];
    this.isLogin = false;
    this.router.navigate(['/home']);
}
}