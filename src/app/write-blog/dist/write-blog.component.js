"use strict";
// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BlogService } from '../blog.service';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WriteBlogComponent = void 0;
// @Component({
//   selector: 'app-write-blog',
//   templateUrl: './write-blog.component.html',
//   styleUrls: ['./write-blog.component.css']
// })
// export class WriteBlogComponent {
//   public loggedIn: boolean = false;
//   blogTitle = '';
//   authorName = '';
//   blogContent = '';
//   blogTags = '';
//   blogImageUrl = ''; // New property for image URL
//   constructor(
//     private route: ActivatedRoute,
//     private blogService: BlogService,
//     private router: Router
//   ) {}
//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       this.loggedIn = params['loggedIn'] === 'loggedIn';
//     });
//   }
//   saveBlog(): void {
//     const confirmResult = confirm('Do you want to post the blog?');
//     if (confirmResult) {
//       this.postBlog();
//     } else {
//     }
//   }
//   postBlog(): void {
//     const newBlog = {
//       title: this.blogTitle,
//       author: this.authorName,
//       content: this.blogContent,
//       tags: this.blogTags.split(',').map(tag => tag.trim()),
//       imageUrl: this.blogImageUrl, // Include the image URL
//       date: new Date().toLocaleDateString()
//     };
//     this.blogService.addBlogPost(newBlog);
//     this.router.navigate(['/']); // Navigate back to home after posting
//   }
// }
var core_1 = require("@angular/core");
var WriteBlogComponent = /** @class */ (function () {
    function WriteBlogComponent(route, blogService, router) {
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        this.loggedIn = false;
        this.blogTitle = '';
        this.authorName = '';
        this.blogContent = '';
        this.blogTags = '';
        this.blogImageUrl = '';
    }
    WriteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.loggedIn = params['loggedIn'] === 'loggedIn';
        });
    };
    WriteBlogComponent.prototype.saveBlog = function () {
        var confirmResult = confirm('Do you want to post the blog?');
        if (confirmResult) {
            this.postBlog();
        }
        else {
            // User chose not to post
        }
    };
    WriteBlogComponent.prototype.postBlog = function () {
        var newBlog = {
            title: this.blogTitle,
            author: this.authorName,
            content: this.blogContent,
            tags: this.blogTags.split(',').map(function (tag) { return tag.trim(); }),
            imageUrl: this.blogImageUrl,
            date: new Date().toLocaleDateString()
        };
        this.blogService.addBlogPost(newBlog);
        this.blogService.updateLatestPost(newBlog); // Update the latest post
        this.router.navigate(['/']);
    };
    WriteBlogComponent = __decorate([
        core_1.Component({
            selector: 'app-write-blog',
            templateUrl: './write-blog.component.html',
            styleUrls: ['./write-blog.component.css']
        })
    ], WriteBlogComponent);
    return WriteBlogComponent;
}());
exports.WriteBlogComponent = WriteBlogComponent;
