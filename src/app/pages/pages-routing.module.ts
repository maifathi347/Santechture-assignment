import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'details/:id',
        component: PostDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
