import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: UntypedFormGroup = new UntypedFormGroup({
    'email': new UntypedFormControl('', [Validators.required, Validators.email]),
    'password': new UntypedFormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    var email = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    //console.log(email, password);

    this.authService.loginUser(email, password).catch()
  }



}
