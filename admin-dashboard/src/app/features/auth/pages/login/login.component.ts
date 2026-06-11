import { Component } from '@angular/core';
import { LoginFormComponent} from '../../components/login-form/login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent,MatCardModule,MatIconModule,MatStepperModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
