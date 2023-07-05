import { Category } from './category.model';
import { Comment } from './comment.model';

export interface Post {
  id: number;
  title: string;
  content: string;
  urlImage: string;
  comments: Comment[];
  category: Category;
}
