import { Component, OnInit } from "@angular/core";
import { PostService } from "../core/post.service";
import { Post } from "../model/post";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    console.log('posts run...');
    this.loadPosts();
  }

  private loadPosts() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
