import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comments.service';

@Component({
  selector: 'bg-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.scss'],
})
export class CommentsAddComponent {
  @Input() postId?: number;
  commentText: string = '';
  @ViewChild('commentInput', { static: false }) commentInputRef!: ElementRef;
  @Output() commentAdded: EventEmitter<Comment> = new EventEmitter<Comment>(); // Nuevo evento

  constructor(private commentService: CommentService) {}

  addComment(): void {
    const inputComment: Comment = {
      content: this.commentText,
      post: this.postId,
    };

    this.commentService.addComment(inputComment).subscribe((comment) => {
      this.commentText = '';
      this.commentInputRef.nativeElement.value = '';
      this.commentAdded.emit(comment);
    });
  }
  updateCommentText(text: string): void {
    this.commentText = text;
  }
}
