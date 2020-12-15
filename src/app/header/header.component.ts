import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor(private router : Router,
    private authService : AuthServiceService) { }


  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  logout(){
    delete sessionStorage['token'];
    delete sessionStorage['isLoggedIn'];
    // this.authService.Logout();
    this.router.navigate(['/home']);
}
}