import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [PostComponent, CategoryComponent, CommentsComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
