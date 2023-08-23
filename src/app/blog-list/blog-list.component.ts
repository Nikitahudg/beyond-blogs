import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.fetchBlogPosts().subscribe(posts => {
      this.blogPosts = posts;
    });
  }
}
