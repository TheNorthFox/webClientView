import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {path: '', component: PostsListComponent},
  {path: 'list', component: PostsListComponent},
  {path: 'add', component: AddPostComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
