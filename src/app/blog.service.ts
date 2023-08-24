import { Injectable } from '@angular/core';

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
  private localStorageKey = 'blogPosts';
  private blogPosts: any[] = [];

  constructor() {
    this.loadBlogPosts();
  }

  
  fetchBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('./assets/blog-posts.json');
  }

  getLatestBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getFeaturedPosts(): BlogPost[] {
    return this.featuredPosts;


  private loadBlogPosts(): void {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.blogPosts = JSON.parse(storedData);
    }
  }

  private saveBlogPosts(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.blogPosts));


  fetchBlogPosts(): void {
  }

  getBlogPosts(): any[] {
    return this.blogPosts;
  }
//   get blogPostAdded$(): Observable<BlogPost> {
//     return this.blogPostAddedSubject.asObservable();
//   }
// }
//   getBlogPostByTags(tags: string[]): BlogPost[] {
//     return this.blogPosts.filter(post => post.tags.some(tag => tags.includes(tag)));
//   }

// export interface BlogPost {
//   title: string;
//   author: string;
//   content: string;
//   tags: string[];
//   date: string;
//   imageUrl: string;
// }
//   addBlogPost(blogPost: any): void {
//     this.blogPosts.push(blogPost);
//     this.saveBlogPosts();
//   }
// }
// >>>>>>> main
