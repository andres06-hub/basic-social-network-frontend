import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IUserSigup } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(
    private _http: HttpClient,
  ) { }

  signup(data: IUserSigup) {
    return this._http.post<IUserSigup>(
      'http://localhost:3000/api/user/signup',
      data,
      {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      }
    );
  }
}
