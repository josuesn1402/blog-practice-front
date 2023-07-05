import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';
import { CommentService } from 'src/app/services/comments.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post?: Post;
  comments: Comment[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostId(id).subscribe((post) => {
      this.post = post;
      this.getComments();
    });
  }

  getComments(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commentService.getComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }

  handleCommentAdded(comment: Comment): void {
    this.comments.push(comment);
  }

  onEditClicked() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.postService.getPostId(id).subscribe({
        next: (post) => {
          this.post = post;
          this.router.navigate(['/post-edit', id]);
        },
        error: (error) => {
          console.error('Error al obtener los datos del post:', error);
        },
      });
    }
  }

  onDeleteClicked() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.postService.deletePost(id);
    }
  }
}
