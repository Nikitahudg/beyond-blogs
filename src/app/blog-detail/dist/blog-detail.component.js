"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogDetailComponent = void 0;
var core_1 = require("@angular/core");
var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent(route, blogService) {
        this.route = route;
        this.blogService = blogService;
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var title = this.route.snapshot.paramMap.get('title');
        if (title) {
            this.post = this.blogService.getBlogPostByTitle(title);
        }
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
