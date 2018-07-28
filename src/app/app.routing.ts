import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent }
];

export const appRouting = RouterModule.forRoot(appRoutes);
