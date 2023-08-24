"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WriteBlogComponent = void 0;
var core_1 = require("@angular/core");
var WriteBlogComponent = /** @class */ (function () {
    function WriteBlogComponent(blogService, router) {
        var _this = this;
        this.blogService = blogService;
        this.router = router;
        this.newBlog = {
            title: '',
            author: '',
            content: '',
            tags: [],
            date: new Date().toISOString(),
            imageUrl: ''
        };
        this.tagInput = '';
        this.blogService.blogPostAdded$.subscribe(function (blogPost) {
            alert('Blog successfully posted!');
            _this.router.navigate(['/']); //
        });
    }
    WriteBlogComponent.prototype.submitBlog = function () {
        this.blogService.addBlog(this.newBlog);
        this.newBlog = {
            title: '',
            author: '',
            content: '',
            tags: [],
            date: new Date().toISOString(),
            imageUrl: ''
        };
        this.tagInput = '';
        this.router.navigate(['/']);
    };
    WriteBlogComponent.prototype.updateTags = function () {
        this.newBlog.tags = this.tagInput.split(',').map(function (tag) { return tag.trim(); });
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
