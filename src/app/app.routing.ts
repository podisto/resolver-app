import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
