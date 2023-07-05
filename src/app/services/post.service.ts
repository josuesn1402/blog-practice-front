import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

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
      return title.substr(0, maxLength) + '...';
    }
    return title;
  }

  truncateContent(content: string): string {
    const maxLength = 176;
    if (content.length > maxLength) {
      return content.substr(0, maxLength) + '...';
    }
    return content;
  }
}
