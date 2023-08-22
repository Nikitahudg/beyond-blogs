import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
