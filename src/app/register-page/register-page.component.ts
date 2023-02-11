import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirm-password')?.value;

    return pass !== confirmPass ? { notSame: true } : null;
  }

  signupForm: UntypedFormGroup = new UntypedFormGroup({
    'email': new UntypedFormControl('', [Validators.required, Validators.email]),
    'password': new UntypedFormControl('', [Validators.required, Validators.minLength(6)]),
    'confirm-password': new UntypedFormControl('', Validators.required),
  },
  { validators: this.checkPasswords }
  );

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  signup(): void {
    var email = this.signupForm.controls['email'].value;
    var password = this.signupForm.controls['password'].value;
    //console.log(email, password);

    this.authService.signupUser(email, password);
  }

  anyFieldEmpty(): boolean{
    if(this.signupForm.controls['email'].hasError('required'))
      return true;
    if(this.signupForm.controls['password'].hasError('required'))
      return true;
    if(this.signupForm.controls['confirm-password'].hasError('required'))
      return true;
    return false;
  }
}
