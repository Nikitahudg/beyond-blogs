import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  addCommentToPost(post: BlogPost, comment: string) {
    throw new Error('Method not implemented.');
  }
 
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

  getLatestBlogPosts(): BlogPost[] {
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

  getBlogPostByTags(tags: string[]): BlogPost[] {
    return this.blogPosts.filter(post => post.tags.some(tag => tags.includes(tag)));
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
  imageUrl: string;
}
