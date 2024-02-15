import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private apiUrl = 'http://localhost:8080/posts'

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  createPost(employee: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, employee);
  }
}
