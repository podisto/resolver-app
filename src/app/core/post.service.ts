import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Post } from "../model/post";

@Injectable()
export class PostService {

  private readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl).pipe(map(response => response));
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.apiUrl}/${id}`).pipe(map(data => data));
  }
}
