import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyMsgService {

  constructor(
    private _http: HttpClient,
  ) { }

  getPostUser(){
    return this._http.get('http://localhost:3000/api/');
  }
}
