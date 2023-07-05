import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostAdd } from '../models/post-add.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/post/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  truncateTitle(title: string): string {
    const maxLength = 25;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  }

  truncateContent(content: string): string {
    const maxLength = 176;
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  }

  getPostId(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}${id}`);
  }

  addPost(post: PostAdd): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: PostAdd): Observable<PostAdd> {
    return this.http.put<PostAdd>(`${this.apiUrl}${id}`, post);
  }

  patchPost(id: number, post: PostAdd): Observable<PostAdd> {
    return this.http.patch<PostAdd>(`${this.apiUrl}${id}`, post);
  }

  deletePost(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete(url);
  }
}
