import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.fetchBlogPosts();
    this.blogPosts = this.blogService.getBlogPosts();
  }
}

interface BlogPost {
  title: string;
  author: string;
  content: string;
  tags: string[];
  date: string;
}
