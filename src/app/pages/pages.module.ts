import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { EditPostComponent } from './components/posts/Edit-post/Edit-post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    PagesComponent,
    PostsComponent,
    EditPostComponent,
    PostDetailsComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule,
    ProgressSpinnerModule,
  ]
})
export class PagesModule { }
