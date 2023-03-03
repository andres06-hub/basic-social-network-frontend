import { Component } from '@angular/core';
import { SingupService } from './services/singup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private readonly _signupSrv: SingupService) {}

  createUser() {
    // this._signupSrv.signup(data)
    // .subscribe(({res, error}) => {
    //     console.log(res);
    //   });
  }

}
