import { Component } from '@angular/core';
import { PostAdd } from 'src/app/models/post-add.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'bg-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent {
  model: PostAdd = {
    title: '',
    content: '',
    urlImage: '',
    category: '',
  };

  constructor(private postService: PostService) {}

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    this.postService.addPost(this.model).subscribe(
      (response) => {
        console.log('Post registrado:', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error al registrar el post:', error);
      }
    );
  }

  isFormInvalid(): boolean {
    return (
      !this.model.title ||
      !this.model.content ||
      !this.model.urlImage ||
      !this.model.category
    );
  }

  resetForm() {
    this.model = {
      title: '',
      content: '',
      urlImage: '',
      category: '',
    };
  }
}
