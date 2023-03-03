import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { MyMsgService } from './services/my-msg.service';

@Component({
  selector: 'app-my-msg',
  templateUrl: './my-msg.component.html',
  styleUrls: ['./my-msg.component.scss']
})
export class MyMsgComponent implements OnInit {
  constructor(private readonly _postUser: MyMsgService) {}

  posts: IPost[] = [
    {
      id: 0,
      title: 'Example',
      message: 'this is example message',
      date: 'dd/mm/yyyy',
      userId: 0,
    }
  ];

  section: string = 'My Message';

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');
    if (!token) return;
    this._postUser.getPostUser(token);
  }
}
