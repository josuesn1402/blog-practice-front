import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostAdd } from 'src/app/models/post-add.model';

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

  model: PostAdd = {
    title: '',
    content: '',
    urlImage: '',
    category: '',
  };

  @ViewChild('formAdd', { static: false })
  form!: FormControl;

  onSubmit() {
    if (this.form.valid) {
      console.log('modelo', this.model);
      this.form.reset();
    }
  }
}
