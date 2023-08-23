import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [];
  private featuredPosts: BlogPost[] = [];
  private blogPostAddedSubject = new Subject<BlogPost>();

  constructor(private http: HttpClient) {
    this.fetchBlogPosts().subscribe(posts => {
      this.blogPosts = posts;
      this.featuredPosts = this.blogPosts.slice(0, 2);
    });
  }

  fetchBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('./assets/blog-posts.json');
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getFeaturedPosts(): BlogPost[] {
    return this.featuredPosts;
  }

  addBlog(blog: BlogPost): void {
    this.blogPosts.push(blog);
    this.blogPostAddedSubject.next(blog);
  }

  getBlogPostByTitle(title: string): BlogPost | undefined {
    return this.blogPosts.find(post => post.title === title);
  }

  get blogPostAdded$(): Observable<BlogPost> {
    return this.blogPostAddedSubject.asObservable();
  }
}

export interface BlogPost {
  title: string;
  author: string;
  content: string;
  tags: string[];
  date: string;
}
