import { Injectable } from '@angular/core';

export interface BlogPost {
  title: string;
  author: string;
  content: string;
  tags: string[];
  imageUrl: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private localStorageKey = 'blogPosts';
  private blogPosts: BlogPost[] = [];
  private latestPost: BlogPost | null = null;

  constructor() {
    this.loadBlogPosts();
  }

  private loadBlogPosts(): void {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.blogPosts = JSON.parse(storedData);
    }
  }

  private saveBlogPosts(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.blogPosts));
  }

  private saveLatestPostToStorage(): void {
    localStorage.setItem('latestPost', JSON.stringify(this.latestPost));
  }

  fetchBlogPosts(): void {
    // Implement fetching blog posts if needed
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  addBlogPost(blogPost: BlogPost): void {
    this.blogPosts.push(blogPost);
    this.saveBlogPosts();
  }

  updateLatestPost(newPost: BlogPost): void {
    this.latestPost = newPost;
    this.saveLatestPostToStorage();
  }

  getLatestPost(): BlogPost | null {
    return this.latestPost;
  }
 
}


// export class BlogService {
//   private localStorageKey = 'blogPosts';
//   private blogPosts: BlogPost[] = [];
//   private latestPost: BlogPost | null = null;

//   constructor() {
//     this.loadBlogPosts();
//     this.updateLatestPostFromStorage();
//   }

//   private updateLatestPostFromStorage(): void {
//     const storedLatestPost = localStorage.getItem('latestPost');
//     if (storedLatestPost) {
//       this.latestPost = JSON.parse(storedLatestPost);
//     }
//   }

//   private saveLatestPostToStorage(): void {
//     localStorage.setItem('latestPost', JSON.stringify(this.latestPost));
//   }

//   fetchBlogPosts(): void {
//     // Your logic to fetch blog posts from an API or other source
//   }

//   getBlogPosts(): BlogPost[] {
//     return this.blogPosts;
//   }

//   getFeaturedPosts(): BlogPost[] {
//     return [];
//   }

//   getLatestPost(): BlogPost | null {
//     return this.latestPost;
//   }

//   addBlogPost(blogPost: BlogPost): void {
//     this.blogPosts.push(blogPost);
//     this.saveBlogPosts();
//   }

//   updateLatestPost(newPost: BlogPost): void {
//     this.latestPost = newPost;
//     this.saveLatestPostToStorage();
//   }

//   private loadBlogPosts(): void {
//     const storedData = localStorage.getItem(this.localStorageKey);
//     if (storedData) {
//       this.blogPosts = JSON.parse(storedData);
//     }
//   }

//   private saveBlogPosts(): void {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(this.blogPosts));
//   }
// }

// export class BlogService {
//   getLatestPost(): BlogPost | null {
//     throw new Error('Method not implemented.');
//   }
//   private localStorageKey = 'blogPosts';
//   private blogPosts: any[] = [];

//   constructor() {
//     this.loadBlogPosts();
//   }

//   private loadBlogPosts(): void {
//     const storedData = localStorage.getItem(this.localStorageKey);
//     if (storedData) {
//       this.blogPosts = JSON.parse(storedData);
//     }
//   }

//   private saveBlogPosts(): void {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(this.blogPosts));
//   }

//   fetchBlogPosts(): void {
//   }

//   getBlogPosts(): any[] {
//     return this.blogPosts;
//   }

//   addBlogPost(blogPost: any): void {
//     this.blogPosts.push(blogPost);
//     this.saveBlogPosts();
//   }
  
  
// }