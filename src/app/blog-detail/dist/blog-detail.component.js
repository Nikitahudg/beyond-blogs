"use strict";
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { BlogService } from '../blog.service';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogDetailComponent = void 0;
// @Component({
//   selector: 'app-blog-detail',
//   templateUrl: './blog-detail.component.html',
//   styleUrls: ['./blog-detail.component.css']
// })
// export class BlogDetailComponent implements OnInit {
//   post?: BlogPost;
//   filteredPosts: BlogPost[] = [];
//   blogPosts: any[] = [];
//   selectedTags: string[] = [];
//   searchQuery: string = '';
//   filteredBlogPosts: any[] = [];
//   constructor(private blogService: BlogService) {}
//   ngOnInit(): void {
//     const title = this.route.snapshot.paramMap.get('title');
//     if (title) {
//       this.post = this.blogService.getBlogPostByTitle(title);
//       this.blogPosts = this.blogService.getBlogPosts();
//       this.applyFilter(); 
//   }
//   handleSearch(): void {
//     this.applyFilter();
//   }
//   filterByTags(tags: string[]): void {
//     this.selectedTags = tags;
//     this.applyFilter();
//   }
//   getAllTags(): string[] {
//     const allTags: string[] = [];
//     this.blogPosts.forEach(post => {
//       post.tags.forEach((tag: string) => {
//         if (!allTags.includes(tag)) {
//           allTags.push(tag);
//         }
//       });
//     });
//     return allTags;
//   }
//   applyFilter(): void {
//     this.filteredBlogPosts = this.blogPosts.filter(post =>
//       this.matchesSearchQuery(post) && this.matchesSelectedTags(post)
//     );
//   }
//   private matchesSearchQuery(post: any): boolean {
//     const query = this.searchQuery.toLowerCase();
//     return (
//       post.title.toLowerCase().includes(query) ||
//       post.author.toLowerCase().includes(query) ||
//       post.content.toLowerCase().includes(query)
//     );
//   }
//   private matchesSelectedTags(post: any): boolean {
//     if (this.selectedTags.length === 0) {
//       return true;
//     }
//     return post.tags.some((tag: string) => this.selectedTags.includes(tag));
//   }
//   filterByTag(tag: string): void {
//     this.filteredPosts = this.blogService.getBlogPostByTags([tag]);
//   }
// }
var core_1 = require("@angular/core");
var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent(blogService) {
        this.blogService = blogService;
        this.blogPosts = [];
        this.selectedTags = [];
        this.searchQuery = '';
        this.filteredBlogPosts = [];
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        this.blogPosts = this.blogService.getBlogPosts();
        this.applyFilter(); // Apply initial filter
    };
    BlogDetailComponent.prototype.handleSearch = function () {
        this.applyFilter();
    };
    BlogDetailComponent.prototype.filterByTags = function (tags) {
        this.selectedTags = tags;
        this.applyFilter();
    };
    BlogDetailComponent.prototype.getAllTags = function () {
        var allTags = [];
        this.blogPosts.forEach(function (post) {
            post.tags.forEach(function (tag) {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                }
            });
        });
        return allTags;
    };
    BlogDetailComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredBlogPosts = this.blogPosts.filter(function (post) {
            return _this.matchesSearchQuery(post) && _this.matchesSelectedTags(post);
        });
    };
    BlogDetailComponent.prototype.matchesSearchQuery = function (post) {
        var query = this.searchQuery.toLowerCase();
        return (post.title.toLowerCase().includes(query) ||
            post.author.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query));
    };
    BlogDetailComponent.prototype.matchesSelectedTags = function (post) {
        var _this = this;
        if (this.selectedTags.length === 0) {
            return true;
        }
        return post.tags.some(function (tag) { return _this.selectedTags.includes(tag); });
    };
    BlogDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-detail',
            templateUrl: './blog-detail.component.html',
            styleUrls: ['./blog-detail.component.css']
        })
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
exports.BlogDetailComponent = BlogDetailComponent;
