import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepper } from '@angular/material/stepper';
import { signal } from '@angular/core';

import { AuthService } from "../../../../core/services/auth.service";
import { LoginResponse } from '../../models/login-response';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink,MatFormFieldModule,MatInputModule,MatIconModule,MatCheckboxModule,MatStepperModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent{

  
  errorMessage = signal('');
  hidePassword = true;

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  //LOGIN FORM INITIALIZED
  loginFormGroup = this.fb.nonNullable.group({
  userName: ['', Validators.required],
  password: ['', Validators.required]
});

//OTP FORM INITIALIZED
otpFormGroup = this.fb.group({
  otp: ['', Validators.required]
});



  //  USERNAME PASSWORD VALIDATION
  submit(stepper: MatStepper) {

     if (this.loginFormGroup.invalid) {
      return;
    }

    this.authService.login(this.loginFormGroup.getRawValue())
      .subscribe({

        next: (response:LoginResponse) => {
          console.log('Login Success', response);
          sessionStorage.setItem("isSessionActive", 'true');
           sessionStorage.setItem("user", JSON.stringify(response));
          stepper.next();
        },

        error: (error) => {
          this.errorMessage.set(error.error.message);
          console.log('Login Failed', error);
        }
      });
  }

 
 
}
