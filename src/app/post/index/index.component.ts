import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {Post} from '../post';
import { User } from '../../../user';
import { ThisUser } from 'src/app/mockdata';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts!: Post[];
  user!: any;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    //this will get all the posts from the server
    this.postService.getAll().subscribe((data:Post[])=> {
      this.posts = data;
      console.log(this.posts);
    })
    this.user = ThisUser
  }

  deletePost(id:number) {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted successfully');
    })
  }
}
