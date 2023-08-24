import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private localStorageKey = 'blogPosts';
  private blogPosts: any[] = [];

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

  fetchBlogPosts(): void {
    // No need for fetching, as we'll use local storage
  }

  getBlogPosts(): any[] {
    return this.blogPosts;
  }

  addBlogPost(blogPost: any): void {
    this.blogPosts.push(blogPost);
    this.saveBlogPosts();
  }
}
