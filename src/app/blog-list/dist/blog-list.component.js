"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogListComponent = void 0;
var core_1 = require("@angular/core");
var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(blogService, route) {
        this.blogService = blogService;
        this.route = route;
        this.filteredPosts = [];
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var tags = params['tags'];
            if (tags) {
                _this.filteredPosts = _this.blogService.getBlogPostByTags(tags);
            }
            else {
                _this.filteredPosts = _this.blogService.getLatestBlogPosts();
            }
        });
    };
    BlogListComponent = __decorate([
        core_1.Component({
            selector: 'app-blog-list',
            templateUrl: './blog-list.component.html',
            styleUrls: ['./blog-list.component.css']
        })
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
