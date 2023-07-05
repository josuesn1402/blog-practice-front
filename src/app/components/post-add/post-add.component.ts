import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { PostAdd } from 'src/app/models/post-add.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'bg-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent {
  title: string = '';
  content: string = '';
  urlImage: string = '';
  category: string = '';

  postId: number = 0;
  isEditMode: boolean = false;
  model: PostAdd = {
    title: '',
    content: '',
    urlImage: '',
    category: '',
  };

  @ViewChild('formAdd', { static: false })
  formAdd!: FormControl;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe((segments) => {
      if (segments[0].path === 'post-edit') {
        this.isEditMode = true;
        this.route.params.subscribe((params) => {
          this.postId = +params['id'];
          if (this.postId) {
            this.getPostById();
          }
        });
      }
    });
  }

  getPostById() {
    this.postService.getPostId(this.postId).subscribe({
      next: (response) => {
        this.model.id = response.id;
        this.model.title = response.title;
        this.model.content = response.content;
        this.model.urlImage = response.urlImage;
        this.model.category = response.category.description;
        this.model.comments = response.comments;
      },
      error: (error) => {
        console.error('Error al obtener el post:', error);
      },
    });
  }

  onSubmit() {
    if (this.isFormInvalid()) {
      return;
    }

    if (this.postId) {
      this.updatePost();
    } else {
      this.addPost();
    }
  }

  addPost() {
    this.postService.addPost(this.model).subscribe({
      next: (response) => {
        console.log('Post registrado:', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al registrar el post:', error);
      },
    });
  }

  updatePost() {
    this.postService.updatePost(this.postId, this.model).subscribe({
      next: (response) => {
        console.log('Post actualizado:', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Error al actualizar el post:', error);
      },
    });
  }

  isFormInvalid(): boolean {
    return this.formAdd.invalid || this.formAdd.untouched;
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
