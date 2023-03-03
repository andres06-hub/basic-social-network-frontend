import { Component } from '@angular/core';
import { LoginServices } from './services/login.services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly _loginSvr: LoginServices) {}

  email: string = '';
  password: string = '';

  login() {
    let email = this.email;
    let password = this.password;
    console.warn(email, password);
    this._loginSvr.login({email, password});
  }

  setEmail(event: any) {
    this.email = event;
    console.warn(this.email);
    console.warn(event);
  }

  Password(event: any) {
    this.password = event;
  }
}
