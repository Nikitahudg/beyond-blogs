"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogService = void 0;
var core_1 = require("@angular/core");
var BlogService = /** @class */ (function () {
    function BlogService() {
        this.localStorageKey = 'blogPosts';
        this.blogPosts = [];
        this.latestPost = null;
        this.loadBlogPosts();
    }
    BlogService.prototype.loadBlogPosts = function () {
        var storedData = localStorage.getItem(this.localStorageKey);
        if (storedData) {
            this.blogPosts = JSON.parse(storedData);
        }
    };
    BlogService.prototype.saveBlogPosts = function () {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.blogPosts));
    };
    BlogService.prototype.saveLatestPostToStorage = function () {
        localStorage.setItem('latestPost', JSON.stringify(this.latestPost));
    };
    BlogService.prototype.fetchBlogPosts = function () {
        // Implement fetching blog posts if needed
    };
    BlogService.prototype.getBlogPosts = function () {
        return this.blogPosts;
    };
    BlogService.prototype.addBlogPost = function (blogPost) {
        this.blogPosts.push(blogPost);
        this.saveBlogPosts();
    };
    BlogService.prototype.updateLatestPost = function (newPost) {
        this.latestPost = newPost;
        this.saveLatestPostToStorage();
    };
    BlogService.prototype.getLatestPost = function () {
        return this.latestPost;
    };
    BlogService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
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
