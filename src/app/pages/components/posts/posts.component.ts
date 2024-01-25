import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { PostsService } from '../../../services/posts.service';
import { EditPostComponent } from './Edit-post/Edit-post.component';
import { LoadService } from 'src/app/shared/services/loader/load.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  ListOfPosts: any[] = [];
  page: number = 1;
  is_Loading: boolean = false;
  filterObject={skip:0,take:5}
  post_Id: any;
  options: any[] = [];
  loading$ = this.loadingService.loading$;


  constructor(
    private postService: PostsService,
    public dialogService: DialogService,
    private cd: ChangeDetectorRef,
    private loadingService: LoadService
  ) { }

  ngOnInit(): void {
    this.GetallPosts(this.filterObject);
    this.cd.detectChanges();
  }

  GetallPosts(filterObject:any): void {
    this.is_Loading = true;
    this.loadingService.setLoadingState(true);

    this.postService.getPostsList(filterObject).subscribe({
      next: (res) => {
        this.is_Loading = false;
        this.ListOfPosts = res;
        this.loadingService.setLoadingState(false);

      },
      error: (err) => {

      },
    });
  }

  onChangePagination(e: any) {
    this.filterObject.skip = e?.first;
    this.filterObject.take = e?.rows;
    this.GetallPosts(this.filterObject);

  }

  EditPost(item: any) {
    const ref = this.dialogService.open(EditPostComponent, {
      data: item,
      header: 'Edit Post',
      width: '55%',
    });

    ref.onClose.subscribe((updatedItem: any) => {
      this.ListOfPosts = this.ListOfPosts.map((post) =>
        post.id === updatedItem.id ? { ...post, title: updatedItem.title, body: updatedItem.body } : post
      );
    });
  }

}
