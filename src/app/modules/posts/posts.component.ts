import { Component } from '@angular/core';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  // constructor(private readonly _postSrv: PostService) {}

  section: string = 'All Messages';

  posts: IPost[] = [
    {
      id: 0,
      title: 'Example',
      message: 'this is example message',
      date: 'dd/mm/yyyy',
      userId: 0,
    }
  ];

  ngOnInit(): void {
    // this._postUser.getPostUser();
  }
}
