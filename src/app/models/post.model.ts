import { Category } from './category.model';

export interface Post {
  id: number;
  title: string;
  content: string;
  urlImage: string;
  category: Category;
}
