import { Component, OnInit } from "@angular/core";
import { Post } from "../model/post";
import { PostService } from "../core/post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('postDetails run...');
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      console.log(post);
      this.post = post;
    });
  }
}
