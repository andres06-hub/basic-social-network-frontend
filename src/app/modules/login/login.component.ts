import { Component } from '@angular/core';
import { LoginServices } from './services/login.services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly _loginSvr: LoginServices) {}

  login() {
    // this._loginSvr.login(data);
  }
}
