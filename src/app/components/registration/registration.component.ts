import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './password-match';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm: any;
  model: any ;
  title: any;
  isMessage: boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private regService : RegistrationService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.title = 'Create an account';
  }
  createForm() {
    this.signupForm = this.fb.group({
     // username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
     }, { validators: passwordMatchValidator })
  }

  get f() { return this.signupForm.controls }

  onSubmit() {
    this.model = this.signupForm.value;
    this.regService.signup(this.model).subscribe(
      result => {
        // console.log("Result from Backend "+result);
      }
    )
    this.router.navigate(['/login']);
    
    
  }


}
