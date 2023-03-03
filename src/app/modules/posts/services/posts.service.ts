import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPostCreate } from '../../../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly _http: HttpClient) { }

  getPosts(data: IPostCreate, token?: string) {
    if (!token) return;
    const headers = new HttpHeaders({'Authorization': token})
    return this._http.post('http://localhost:3000/api/post/createPost',
    data,
    {
      headers,
    }
    );
  }
}
