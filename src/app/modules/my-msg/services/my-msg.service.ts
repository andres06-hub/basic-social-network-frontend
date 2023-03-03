import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IPost } from 'src/app/models/IPost';

@Injectable({
  providedIn: 'root'
})
export class MyMsgService {

  constructor(
    private _http: HttpClient,
  ) { }

  getPostUser(token?: string){
    if (!token) return;
    const headers = new HttpHeaders({'Authorization': token})
    return this._http.get<IPost[]>('http://localhost:3000/api/post',
    {
      headers,
    });
  }
}
