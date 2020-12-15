import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { LoginServicesService } from 'src/app/login-services.service';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : any;
  title : string = "Login Here";
  model : any;
  userData : any;
  constructor(private fb : FormBuilder,
    private loginService : LoginServicesService,
    private router : Router,
    private auth : AuthServiceService) { }

  ngOnInit(): void {
    this.createForm();
    
  }
  createForm() {
    this.loginForm  = this.fb.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
     })
  }

  get f() { return this.loginForm.controls }
  signIn()
  {
    if(this.loginForm.valid)
    {
    this.model = this.loginForm.value;
    this.loginService.loginUser(this.model).subscribe((data:any)=>
    
    {
      sessionStorage.setItem('token',JSON.stringify(data));
      // sessionStorage['isLogin']=true;
      this.auth.Login();
      this.router.navigate(['/dashboard']);
  }
  ,(err:any)=>{
   
   
    alert("Invalid EmailID or Password");
    this.router.navigate(['/login']);
  });
  }
 }
}
