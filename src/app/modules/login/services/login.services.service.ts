import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IUserLogin } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {

  constructor(
    private _http: HttpClient,
  ) { }

  login(data: IUserLogin){
    return this._http.post('http://localhost:3000/api/auth/login', data)
  }
}
