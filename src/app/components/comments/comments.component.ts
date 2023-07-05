import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comments.service';

@Component({
  selector: 'bg-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() comment?: Comment;

  constructor(private router: Router, private commentService: CommentService) {}

  ngOnInit() {}

  onDeleteClicked() {
    if (this.comment?.id) {
      this.commentService.deleteComment(this.comment?.id).subscribe({
        next: (res) => {
          location.reload();
        },
        error: (error) => {
          console.error('Error al eliminar el comentario:', error);
        },
      });
    }
  }
}
