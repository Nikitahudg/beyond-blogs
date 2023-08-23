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
var rxjs_1 = require("rxjs");
var BlogService = /** @class */ (function () {
    function BlogService(http) {
        var _this = this;
        this.http = http;
        this.blogPosts = [];
        this.featuredPosts = [];
        this.blogPostAddedSubject = new rxjs_1.Subject();
        this.fetchBlogPosts().subscribe(function (posts) {
            _this.blogPosts = posts;
            _this.featuredPosts = _this.blogPosts.slice(0, 2);
        });
    }
    BlogService.prototype.fetchBlogPosts = function () {
        return this.http.get('./assets/blog-posts.json');
    };
    BlogService.prototype.getBlogPosts = function () {
        return this.blogPosts;
    };
    BlogService.prototype.getFeaturedPosts = function () {
        return this.featuredPosts;
    };
    BlogService.prototype.addBlog = function (blog) {
        this.blogPosts.push(blog);
        this.blogPostAddedSubject.next(blog);
    };
    BlogService.prototype.getBlogPostByTitle = function (title) {
        return this.blogPosts.find(function (post) { return post.title === title; });
    };
    Object.defineProperty(BlogService.prototype, "blogPostAdded$", {
        get: function () {
            return this.blogPostAddedSubject.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    BlogService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
