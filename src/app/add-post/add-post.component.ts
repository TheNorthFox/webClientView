import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post= new Post();

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    
  }

  addPosts(): void{
    this.postService.createPost(this.post).subscribe(data => {
      console.log(data);
      this.post = new Post();
    });
  }

  onSubmit(): void {
    this.addPosts();
  }
}
