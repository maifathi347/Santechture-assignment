import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postDetails: any;
  comments: any = [];
  isLoading: boolean = false;
  postId: any;

  constructor(
    private route: ActivatedRoute,
    private PostsService: PostsService
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.params['id'];
    this.getPost();
    this.getComments();
  }

  getPost() {
    this.isLoading = true;
    this.PostsService.getPost(this.postId).subscribe({
      next: (res: any) => {
        this.postDetails = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getComments() {
    this.PostsService.getCommentsList(this.postId).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.comments = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

}
