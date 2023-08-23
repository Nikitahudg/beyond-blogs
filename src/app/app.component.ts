import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {}
  //  featuredPosts: any[] = [];

  // constructor(public blogService: BlogService) {}

  // ngOnInit(): void {
  //   this.featuredPosts = this.blogService.getFeaturedPosts();
  // }
}
