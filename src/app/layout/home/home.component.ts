import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts.map((post) => {
        const truncatedTitle = this.postService.truncateTitle(post.title);
        const truncatedContent = this.postService.truncateContent(post.content);
        return {
          ...post,
          title: truncatedTitle,
          content: truncatedContent,
        };
      });
    });
  }
}
