import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPosts: BlogPost[] = [];
  latestBlogs: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.fetchBlogPosts().subscribe(posts => {
      this.featuredPosts = posts.slice(0, 3); 
      this.latestBlogs = posts;
    });
  }
}
