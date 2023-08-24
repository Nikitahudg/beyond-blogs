import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

  const routes: Routes = [
    { path: '', component:BlogDetailComponent },
    { path: 'write-blog', component: WriteBlogComponent },
    {path:'login',component:UserLoginComponent},
    { path: 'blog/:title', component: BlogDetailComponent },
    { path: 'blog', component: BlogListComponent },
    { path: '**', redirectTo: '' },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
