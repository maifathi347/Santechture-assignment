import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-Edit-post',
  templateUrl: './Edit-post.component.html',
  styleUrls: ['./Edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  EditForm: UntypedFormGroup | any;

  constructor(
    private fb: FormBuilder,
    public Dialogconfig: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private PostsService: PostsService,
  ) {}

  get formControls(): any {
    return this.EditForm?.controls;
  }
  ngOnInit(): void {
    this.CreateForm();
    this.updateFormValues()
  }
  CreateForm()
  {
     this.EditForm = this.fb?.group({
    title: [null,Validators.required],
    body: [null],
  });
  }
  updateFormValues() {
    this.EditForm.patchValue({
      title: this.Dialogconfig?.data?.title,
      body: this.Dialogconfig?.data?.body,
    });
   }
  submit() {
    let data: any = { ...this.EditForm.value };
    data.id = this.Dialogconfig?.data?.id;
    this.PostsService.updatePost(data).subscribe({
      next: (res: any) => {
        this.ref.close(res);
        this.successMsg();
      },
      error: (err: any) => {
        this.errorMsg();
      },
    });
  }
  successMsg()
  {
    Swal.fire({
      title: 'Success',
      text: `Post updated sucessfully`,
      icon: 'success',
      confirmButtonColor: '#198754',
    })
  }
  errorMsg()
  {
    Swal.fire({
      title: 'Error',
      text: `error in update this post !!!`,
      icon: 'error',
      confirmButtonColor: '#198754',
    });
  }
}
