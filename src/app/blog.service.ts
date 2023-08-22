import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  fetchBlogPosts(): void {
    this.http.get<BlogPost[]>('/assets/blog-posts.json').subscribe(posts => {
      this.blogPosts = posts;
    });
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }
}

interface BlogPost {
  title: string;
  author: string;
  content: string;
  tags: string[];
  date: string;
}
