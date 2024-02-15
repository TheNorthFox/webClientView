import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';
import { Post } from '../Post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }
  
}
