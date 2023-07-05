import { Comment } from './comment.model';

export interface PostAdd {
  id?: number;
  title: string;
  content: string;
  urlImage: string;
  comments?: Comment[];
  category: string;
}
