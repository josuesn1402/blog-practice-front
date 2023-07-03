import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { CommentsComponent } from './comments/comments.component';
import { PostAddComponent } from './post-add/post-add.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [PostComponent, CategoryComponent, CommentsComponent, PostAddComponent, CardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
